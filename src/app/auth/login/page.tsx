'use client'
import React, { useState, CSSProperties, useRef } from 'react';
import credentials from "../../../../mock/credentials.json";

const LoginPage = () => {
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "" || password === "") {
            return setMessage('Error: please fill the inputs');
        }

        const isValidUser = credentials.some(
            (cred) => cred.email === email && cred.password === password
        );

        setMessage(isValidUser ? "Login successful" : "Login failed");

        if (isValidUser) {
            setStatus(true);
            setMessage("Login successful");
        } else {
            setStatus(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} role="form" style={formStyle}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
                ref={inputEmail}
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                disabled={status} // Deshabilitar el input si el login es exitoso
            />

            <label htmlFor="password" style={labelStyle}>Password</label>
            <input
                ref={inputPassword}
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                disabled={status} // Deshabilitar el input si el login es exitoso
            />

            <button type="submit" style={buttonStyle}>Login</button>
            {message && <p style={{
                marginTop: '15px',
                color: status ? '#28a745' : 'red',
                fontWeight: 'bold',
            }}>{message}</p>}
        </form>
    )
}

const formStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
};

const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: 'black',
};

const inputStyle = {
    width: '100%',
    color: 'black',
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
};

const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
};

export default LoginPage;
