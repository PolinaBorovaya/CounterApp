import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import Login from '../views/Login';
import { loginStore } from '../store/LoginStore';

const LoginMstContainer = observer(() => {
    const navigate = useNavigate();

    const handleEmailChange = useCallback(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        loginStore.setEmail(value);
    },[]);

    const handlePasswordChange = useCallback(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        loginStore.setPassword(value);
    }, []);

    const handleSubmit = useCallback((e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isValid = loginStore.validateLoginForm();

        if (!isValid){
            return;
        }

        console.log('Отправка формы (MST):', {
            email: loginStore.email,
            password: loginStore.password,
        });

        navigate('/login-mst/success');
    }, []);

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