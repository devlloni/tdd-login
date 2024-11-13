import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';

import Home from '../src/app/page';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Home', () => {
  it('renders a Button', () => {
    render(<Home />);
    const buttonComponent = screen.getByRole('button');
    const textButtonComponent = buttonComponent.textContent;
    expect(buttonComponent).toBeInTheDocument();
  });

  it('button login has Ingresar text', () => {
    render(<Home />);
    const buttonComponent = screen.getByRole('button');
    const textButtonComponent = buttonComponent.textContent;
    expect(textButtonComponent).toMatch('Ingresar');
  });
});
