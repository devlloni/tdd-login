import { render, screen, fireEvent } from '@testing-library/react';

import LoginPage from '@/app/auth/login/page';

describe('Interactions with login page', () => {
    it('should display login succesfull message with correct credentials', async () => {
        render(<LoginPage />);
        const emailInput = screen.getByLabelText(/Email/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /login/i });

        fireEvent.change(emailInput, { target: { value: "john@doe.com" }});
        fireEvent.change(passwordInput, { target: { value: "123456" }});
        fireEvent.click(submitButton);

        const successMessage = await screen.findByText(/Login successful/i);
        expect(successMessage).toBeInTheDocument();
    });

    it('should block inputs after click submit button (if its correct)', () => {
        render(<LoginPage />);

        const emailInput = screen.getByLabelText(/Email/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /login/i });

        fireEvent.change(emailInput, { target: { value: "john@doe.com" }});
        fireEvent.change(passwordInput, { target: { value: "123456" }});
        fireEvent.click(submitButton);
        console.log(emailInput);
        expect(emailInput).toBeDisabled();
        expect(passwordInput).toBeDisabled();
    });

    it('should display login failed after introduce wrong credentials', async () => {
        render(<LoginPage />);

        const emailInput = screen.getByLabelText(/Email/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /login/i });

        fireEvent.change(emailInput, { target: { value: "fake@email.com" }});
        fireEvent.change(passwordInput, { target: { value: "123456" }});
        fireEvent.click(submitButton);

        const errorMessage = await screen.findByText(/Login failed/i);
        expect(errorMessage).toBeInTheDocument();
    });

    it('should display "Error: please fill the inputs" when empty inputs are submitted', async () => {
        render(<LoginPage />);

        const emailInput = screen.getByLabelText(/Email/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /login/i });

        fireEvent.click(submitButton);

        const errorMessage = await screen.findByText(/Error: please fill the inputs/i);
        expect(errorMessage).toBeInTheDocument();
    })
})