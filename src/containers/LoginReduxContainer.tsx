import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../views/Login';
import { useAppDispatch, useAppSelector } from '../store';
import { setEmail, setPassword, setErrors } from '../store/loginSlice';
import { getLoginFormError } from '../utils/validation';

const LoginReduxContainer = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const email = useAppSelector((state) => state.login.email);
    const password = useAppSelector((state) => state.login.password);
    const errors = useAppSelector((state) => state.login.errors);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.target.value));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(e.target.value));
    };

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = getLoginFormError(email, password);
        dispatch(setErrors(validationErrors));

        if (Object.keys(validationErrors).length > 0) return;

        console.log('Отправка формы (Redux):', { email, password });
        navigate('/login-redux/success');
    };

    return (
        <Login
            email={email}
            password={password}
            errors={errors}
            onEmailChange={handleEmailChange}
            onPasswordChange={handlePasswordChange}
            onSubmit={handleSubmit}
        />
    );
};

export default LoginReduxContainer;