import { render } from '@testing-library/react';

import LayoutContainer from './layout-container';

describe('<LayoutContainer/>', () => {
  it('should be in the dom', () => {
    const { getByTestId, queryByText } = render(
      <LayoutContainer>
        <div>Test text</div>
      </LayoutContainer>,
    );


    expect(getByTestId('layout-container')).toBeInTheDocument();
    expect(queryByText(/test text/i)).toBeInTheDocument();
  });
});
