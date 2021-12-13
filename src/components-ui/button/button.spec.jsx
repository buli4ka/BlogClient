import { fireEvent, render, screen } from '@testing-library/react';

import Button from './button';

describe('<Button />', () => {
  it('shows custom title', () => {
    const TITLE = 'My button';

    render(<Button title={TITLE} />);

    expect(screen.getByTestId('button')).toHaveTextContent(TITLE);
  });

  it('adds custom classname', () => {
    const CLASSNAME = 'my-button';

    render(<Button className={CLASSNAME} />);

    expect(screen.getByTestId('button')).toHaveClass(CLASSNAME);
  });

  it('callback executes on onclick', () => {
    const ONCLICK = jest.fn();

    render(<Button onClick={ONCLICK} />);
    fireEvent.click(screen.getByTestId('button'));

    expect(ONCLICK).toHaveBeenCalled();
  });
});
