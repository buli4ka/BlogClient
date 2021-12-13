import { fireEvent, render, screen } from '@testing-library/react';

import Gallery from './gallery';

describe('<Gallery />', () => {
  it('should no render zoom button', () => {
    render(<Gallery zoomable={false} />);

    expect(screen.queryByTestId('zoom-enable-btn')).not.toBeInTheDocument();
  });

  it('should render enable zoom button', () => {
    render(<Gallery images={['my-image.png']} zoomable />);

    expect(screen.queryByTestId('zoom-enable-btn')).toBeInTheDocument();
  })

  it('should toggle zoom button', () => {
    render(<Gallery images={['my-image.png']} zoomable />);

    fireEvent.click(screen.getByTestId('zoom-enable-btn'));

    expect(screen.queryByTestId('zoom-enable-btn')).not.toBeInTheDocument();
    expect(screen.getByTestId('zoom-disable-btn')).toBeInTheDocument();
  })
});
