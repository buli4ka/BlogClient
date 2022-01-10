import { fireEvent, render } from '@testing-library/react';

import Modal from './modal';

describe('<Modal />', () => {

  it('should be in the dom', () => {
    const { queryByText } = render(<Modal><div>test text</div></Modal>);

    expect(queryByText(/test text/i)).toBeInTheDocument();
  });

  it('closeModal should be called when click overlay', () => {
    const closeModal = jest.fn();
    const { queryByTestId } = render(<Modal closeModal={closeModal}><div>test text</div></Modal>);

    fireEvent.click(queryByTestId('modal-overlay'));

    expect(closeModal).toBeCalled();
  });
});
