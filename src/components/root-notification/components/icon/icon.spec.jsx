import { render } from '@testing-library/react';

import { TYPES } from '../../../../constants/notifications';

import Icon from './icon';


describe('<Icon/>', () => {
  it('Error icon should be in the dom', () => {
    const { getByTestId } = render(<Icon type={TYPES.ERROR} />);

    expect(getByTestId(`notification-icon-${TYPES.ERROR}`)).toBeInTheDocument();
  });
  it('Warning icon should be in the dom', () => {
    const { getByTestId } = render(<Icon type={TYPES.WARNING} />);

    expect(getByTestId(`notification-icon-${TYPES.WARNING}`)).toBeInTheDocument();
  });
  it('Success icon should be in the dom', () => {
    const { getByTestId } = render(<Icon type={TYPES.SUCCESS} />);

    expect(getByTestId(`notification-icon-${TYPES.SUCCESS}`)).toBeInTheDocument();
  });

  it('should be null', () => {
    const { queryByTestId } = render(<Icon />);

    expect(queryByTestId(`notification-icon-${TYPES.SUCCESS}`)).not.toBeInTheDocument();
  });

});
