import { createSlice } from '@reduxjs/toolkit';
import { LoginFormErrors } from '../utils/validation';

interface LoginState {
    email: string, 
    password: string,
    errors: LoginFormErrors,
}

const initialState : LoginState = {
    email: '',
    password: '',
    errors: {},
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload; 
        }, 

        setPassword: (state, action) => {
            state.password = action.payload;
        },

        setErrors: (state, action) => {
            state.errors = action.payload;
        },

        resetForm: (state) => {
            state.email = '';
            state.password = '';
            state.errors = {};
        },
    },
});

export const { setEmail, setPassword, setErrors, resetForm } = loginSlice.actions;

export default loginSlice.reducer;