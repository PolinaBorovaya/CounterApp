import React, { useEffect } from 'react';
import LoginMstContainer from '../../containers/LoginMstContainer';
import { loginStore } from '../../store/LoginStore';

const LoginMst = () => {
    useEffect(() => {
        loginStore.resetLoginForm();
    }, []);

    return <LoginMstContainer />;
};

export default LoginMst;