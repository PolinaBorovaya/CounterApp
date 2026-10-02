import React, { useState } from 'react';
import Login from '../views/Login';

export interface LoginFormErrors {
    email?: string,
    password?: string,
}

export interface LoginHandlers {
}

const LoginContainer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<LoginFormErrors>({}); 

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
        setEmail('');
        setPassword('');
        setErrors({});
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