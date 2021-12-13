import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { init, showModal, hideAllModal, hideModal, isModalVisibleSelector } from 'store/modal-slice';

const useModal = (modalId, { size, onShow, onHide } = {}) => {
  const dispatch = useDispatch();

  const isModalVisible = useSelector(isModalVisibleSelector(modalId));
  const show = (props = {}) => dispatch(showModal({ id: modalId, props }));
  const hide = () => dispatch(hideModal({ id: modalId }));
  const hideAll = () => dispatch(hideAllModal());

  useEffect(() => {
    return () => {
      if (isModalVisible) {
        onHide?.();
      } else {
        onShow?.();
      }
    };
  }, [isModalVisible, onHide, onShow]);

  useEffect(() => {
    dispatch(init({
      id: modalId,
      size,
    }));

    return () => dispatch(hideModal({ id: modalId }));
  }, [dispatch, modalId, size]);

  return [show, hide, hideAll];
};

export default useModal;
