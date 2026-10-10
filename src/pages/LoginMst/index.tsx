import React, { useEffect } from 'react';
import LoginMstContainer from '../../containers/LoginMstContainer';
import { loginStore } from '../../store/LoginStore';

const LoginMst = () => {
    useEffect(() => {
        loginStore.reset();
    }, []);

    return <LoginMstContainer />;
};

export default LoginMst;