import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import RootNotification from './root-notification';

import store from 'store';
import { showWarningNotification } from 'store/notification-slice';


describe('<RootNotification/>', () => {
  it('should be null', () => {
    const { queryByTestId } = render(<Provider store={store}><RootNotification /></Provider>);

    expect(queryByTestId('root-notification')).not.toBeInTheDocument();
  });

  it('should be in the Dom', () => {
    store.dispatch(showWarningNotification('Test message'));

    const { queryByTestId, queryByText } = render(<Provider store={store}><RootNotification /></Provider>);


    expect(queryByTestId('root-notification')).toBeInTheDocument();
    expect(queryByText('Test message')).toBeInTheDocument();
  });
});
