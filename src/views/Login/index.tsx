import React from 'react';
import * as styles from './styles';
import { Button } from '@progress/kendo-react-buttons';

export interface LoginProps{
    email: string,
    password: string,
    errors: {
      email?: string,
      password?: string,
    }
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

const Login = ({email, password, errors, onEmailChange, onPasswordChange, onSubmit} : LoginProps) => {
    return (
      <div style={styles.rootStyles}>
        <form onSubmit={onSubmit} style={styles.formStyles}>
            <h1 style={styles.titleStyles}>Вход</h1>

            <div style={styles.fieldStyles}>
              <label>Email</label>
              <input name='email' type='email' value={email} onChange={onEmailChange} style={styles.inputStyles}></input>
              {errors.email && (<span style={styles.errorStyles}>{errors.email}</span>)}   
            </div>
            
            <div style={styles.fieldStyles}>
              <label>Password</label>
              <input name='password' type='password' value={password} onChange={onPasswordChange}></input>
              {errors.password && (<span style={styles.errorStyles}>{errors.password}</span>)}
            </div>
            
            <Button type='submit' themeColor="primary" fillMode="solid">Войти</Button>
        </form>

        <div style={styles.previewStyles}>
          <p><strong>Email:</strong> {email || '—'}</p>
          <p><strong>Password:</strong> {password || '—'}</p>
        </div>
      </div>
    );
}

export default Login;