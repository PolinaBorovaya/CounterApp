import React from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import Login from '../views/Login';
import { loginStore } from '../store/LoginStore';

const LoginMstContainer = observer(() => {
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        loginStore.setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        loginStore.setPassword(e.target.value);
    };

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isValid = loginStore.validate();

        if (!isValid) return;

        console.log('Отправка формы (MST):', {
            email: loginStore.email,
            password: loginStore.password,
        });

        navigate('/login-mst/success');
    };

    return (
        <Login
            email={loginStore.email}
            password={loginStore.password}
            errors={loginStore.errors}
            onEmailChange={handleEmailChange}
            onPasswordChange={handlePasswordChange}
            onSubmit={handleSubmit}
        />
    );
});

export default LoginMstContainer;