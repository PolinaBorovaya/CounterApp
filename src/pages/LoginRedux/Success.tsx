import React from 'react';
import { useAppSelector } from '../../store';
import * as styles from './styles';

const Success = () => {
    const email = useAppSelector((state) => state.login.email);
    const password = useAppSelector((state) => state.login.password);

    return (
        <div style={styles.rootStyles}>
            <h1 style={styles.titleStyles}>Успешный вход</h1>
            <p style={styles.textStyles}>Email: {email}</p>
            <p style={styles.textStyles}>Password: {password}</p>
        </div>
    );
};

export default Success;