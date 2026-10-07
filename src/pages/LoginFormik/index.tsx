import LoginFormikContainer from '../../containers/LoginFormikContainer';
import {useAppDispatch} from '../../store';
import {resetForm} from '../../store/loginSlice';
import React, { useEffect } from 'react';

const LoginFormik = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(resetForm());
    }, [dispatch]);

    return <LoginFormikContainer />
}

export default LoginFormik;