import React, { useState } from 'react';
import Login from '../views/Login';

const DEFAULT_EMAIL = '';
const DEFAULT_PASSWORD = '';
const DEFAULT_ERRORS: LoginFormErrors = {};

export interface LoginFormErrors {
    email?: string,
    password?: string,
}

const LoginContainer = () => {
    const [email, setEmail] = useState(DEFAULT_EMAIL);
    const [password, setPassword] = useState(DEFAULT_PASSWORD);
    const [errors, setErrors] = useState<LoginFormErrors>(DEFAULT_ERRORS); 

    const validate = () => {
        const newErrors: LoginFormErrors = {};

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Введите корректный email';
        }

        if (password.length < 6) {
            newErrors.password = 'Пароль должен содержать минимум 6 символов';
        }

        return newErrors;
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if(Object.keys(validationErrors).length > 0) return;

        console.log('Отправка формы:', { email, password });
        setEmail(DEFAULT_EMAIL);
        setPassword(DEFAULT_PASSWORD);
        setErrors(DEFAULT_ERRORS);
    };

    return (<Login 
        email={email}
        password={password}
        errors={errors}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
    />);
};

export default LoginContainer;