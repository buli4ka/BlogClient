import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';

import Modal from '../../modal/modal';
import AuthModal from '../auth-modal/auth-modal';
import PostDetailModal from '../post-detail-modal/post-detail-modal';
import UpdateUserModal from '../update-user-modal/update-user-modal';

import { useEventListener } from 'hooks/use-event-listener';
import { MODALS } from 'constants/modals';
import { getVisibleModalsSelector, hideModal, hideAllModal } from 'store/modal-slice';


const ModalContent = {
  [MODALS.AUTHENTICATE]: AuthModal,
  [MODALS.POST]: PostDetailModal,
  [MODALS.UPDATE]: UpdateUserModal,
};

const modalRoot = document.createElement('div');

modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

const RootModal = () => {
  const modals = useSelector(getVisibleModalsSelector);
  const dispatch = useDispatch();
  const onEscapePress = ({ code }) => code === 'Escape' && dispatch(hideAllModal());

  useEventListener('keydown', onEscapePress);

  useLayoutEffect(() => {
    if (document.body.scrollHeight !== document.body.clientHeight) {
      if (modals.length) {
        document.body.classList.add('modal-opened');
      } else {
        document.body.classList.remove('modal-opened');
      }
    }
  }, [modals]);

  return ReactDOM.createPortal(
    <>
      {modals.map(([modalId, modalItem]) => {
        const ModalContentComponent = ModalContent[modalId];

        return (
          <Modal key={modalId} size={modalItem.size} closeModal={() => dispatch(hideModal({ id: modalId }))}>
            <ModalContentComponent {...modalItem.props} onClose={() => dispatch(hideModal({ id: modalId }))} />
          </Modal>
        );
      })}
    </>,
    modalRoot,
  );
};

export default RootModal;
