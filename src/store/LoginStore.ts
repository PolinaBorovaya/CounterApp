import { types } from 'mobx-state-tree';
import { validateLoginForm } from '../utils/validation';

const DEFAULT_EMAIL = '';
const DEFAULT_PASSWORD = '';
const DEFAULT_ERRORS: { email?: string; password?: string } = {};

export const LoginStore = types
    .model('LoginStore', {
        email: types.optional(types.string, DEFAULT_EMAIL),
        password: types.optional(types.string, DEFAULT_PASSWORD),
        errors: types.optional(
            types.frozen<{ email?: string; password?: string }>(), DEFAULT_ERRORS),
    })
    .actions((self) => ({
        setEmail(value: string) {
            self.email = value;
        },
        setPassword(value: string) {
            self.password = value;
        },
        validateLoginForm(): boolean {
            const validationErrors = validateLoginForm(self.email, self.password);
            self.errors = validationErrors;
            return Object.keys(validationErrors).length === 0;
        },
        resetLoginForm() {
            self.email = DEFAULT_EMAIL;
            self.password = DEFAULT_PASSWORD;
            self.errors = DEFAULT_ERRORS;
        },
    }));

export const loginStore = LoginStore.create({});