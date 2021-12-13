import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';

import RootModal from './root-modal';

import { MODALS } from 'constants/modals';
import store from 'store';
import { hideModal, showModal } from 'store/modal-slice';


describe('<RootModal/>', () => {
  it('should be null', () => {
    const { queryByTestId } = render(<Provider store={store}><RootModal /></Provider>);

    expect(queryByTestId('modal')).not.toBeInTheDocument();
  });

  it('should be in the Dom', () => {
    store.dispatch(showModal({ id: MODALS.LPN_MODAL, props: { data: {} } }));

    const { queryByTestId } = render(<Provider store={store}><RootModal /></Provider>);


    expect(queryByTestId('modal')).toBeInTheDocument();
    expect(queryByTestId('modal-lpn-content')).toBeInTheDocument();
  });

  it('should close Modal escape', () => {
    store.dispatch(showModal({ id: MODALS.LPN_MODAL, props: { data: {} } }));

    const { queryByTestId } = render(<Provider store={store}><RootModal /></Provider>);

    expect(queryByTestId('modal')).toBeInTheDocument();
    expect(queryByTestId('modal-lpn-content')).toBeInTheDocument();

    fireEvent.keyDown(document, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });

    expect(queryByTestId('modal')).not.toBeInTheDocument();
    expect(queryByTestId('modal-lpn-content')).not.toBeInTheDocument();
  });

  it('should close Modal callback', () => {
    store.dispatch(showModal({ id: MODALS.LPN_MODAL, props: { data: {} } }));

    const { queryByTestId } = render(<Provider store={store}><RootModal /></Provider>);

    expect(queryByTestId('modal')).toBeInTheDocument();
    expect(queryByTestId('modal-lpn-content')).toBeInTheDocument();

    store.dispatch(hideModal({ id: MODALS.LPN_MODAL }));

    expect(queryByTestId('modal')).not.toBeInTheDocument();
    expect(queryByTestId('modal-lpn-content')).not.toBeInTheDocument();
  });
});
