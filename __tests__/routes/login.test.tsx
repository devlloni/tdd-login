import { render, screen } from '@testing-library/react';

import LoginPage from '@/app/auth/login/page';

describe('Login Page', () => {
    it('renders div with form', () => {
        render(<LoginPage />);
        const formComponent = screen.getByRole('form');
        expect(formComponent).toBeInTheDocument();
    })

    it('form has input for email and password', () => {
        render(<LoginPage />);
        const emailInputComponent = screen.getByLabelText('Email');
        const passwordInputComponent = screen.getByLabelText('Password');

        expect(emailInputComponent).toBeInTheDocument();
        expect(passwordInputComponent).toBeInTheDocument();
    });

    it('input password type password', () => {
        render(<LoginPage />);
        const inputPasswordComponent = screen.getByLabelText('Password');
        expect(inputPasswordComponent).toHaveAttribute('type', 'password');
    })

    it('input email type email', () => {
        render(<LoginPage />);
        const inputTextComponent = screen.getByLabelText('Email');
        expect(inputTextComponent).toHaveAttribute('type', 'email');
    })
})