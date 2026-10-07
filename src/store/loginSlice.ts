import { createSlice } from '@reduxjs/toolkit';
import { LoginFormErrors } from '../utils/validation';
import { act } from 'react';

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

        saveForm: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
    },
});

export const { setEmail, setPassword, setErrors, resetForm, saveForm } = loginSlice.actions;

export default loginSlice.reducer;