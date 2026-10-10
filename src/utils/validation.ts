export interface LoginFormErrors{
    email?: string, 
    password?: string,
}

export const getEmailError = (email: string): string | undefined => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return 'Введите корректный email';
    }

    return undefined;
};

export const getPasswordError = (password: string): string | undefined => {
    if (password.length < 6) {
        return 'Пароль должен содержать минимум 6 символов';
    }

    return undefined;
};

export const getLoginFormError = (email: string, password: string): LoginFormErrors => {
    const newErrors: LoginFormErrors = {};

    const emailError = getEmailError(email);
    if (emailError !== undefined) {
        newErrors.email = emailError;
    }

    const passwordError = getPasswordError(password);
    if(passwordError !== undefined) {
        newErrors.password = passwordError;
    }

    return newErrors; 
}