import React, { useEffect } from 'react';
import LoginReduxContainer from '../../containers/LoginReduxContainer';
import { useAppDispatch } from '../../store';
import { resetForm } from '../../store/loginSlice';


const LoginRedux = () => {
    const dispatch = useAppDispatch();
    useEffect(() => { 
        dispatch(resetForm()); 
    }, [dispatch]);

    return <LoginReduxContainer />;
};

export default LoginRedux;