import { render, screen } from '@testing-library/react';

import Loader from './loader';

describe('<Loader />', () => {
  it('renders loader with custom width and height', () => {
    const WIDTH = 64;
    const HEIGHT = 65;

    render(<Loader width={WIDTH} height={HEIGHT} />);

    expect(screen.getByTestId('loader').firstElementChild).toHaveAttribute('width', `${WIDTH}px`);
    expect(screen.getByTestId('loader').firstElementChild).toHaveAttribute('height', `${HEIGHT}px`);
  });
});
