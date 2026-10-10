import React from 'react';
import { observer } from 'mobx-react-lite';
import { loginStore } from '../../store/LoginStore';
import * as styles from '../LoginRedux/styles';

const Success = observer(() => {
    return (
        <div style={styles.rootStyles}>
            <h1 style={styles.titleStyles}>Успешный вход</h1>
            <p style={styles.textStyles}>Email: {loginStore.email}</p>
            <p style={styles.textStyles}>Password: {loginStore.password}</p>
        </div>
    );
});

export default Success;