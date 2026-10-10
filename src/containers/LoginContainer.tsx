import React, { useState } from 'react';
import Login from '../views/Login';
import { getLoginFormError, LoginFormErrors } from '../utils/validation';

const LoginContainer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<LoginFormErrors>({}); 

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = getLoginFormError(email, password);
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