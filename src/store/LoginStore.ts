import { types } from 'mobx-state-tree';
import { validateLoginForm } from '../utils/validation';

export const LoginStore = types
    .model('LoginStore', {
        email: types.optional(types.string, ''),
        password: types.optional(types.string, ''),
        errors: types.optional(
            types.frozen<{ email?: string; password?: string }>(),
            {}
        ),
    })
    .actions((self) => ({
        setEmail(value: string) {
            self.email = value;
        },
        setPassword(value: string) {
            self.password = value;
        },
        validate(): boolean {
            const validationErrors = validateLoginForm(self.email, self.password);
            self.errors = validationErrors;
            return Object.keys(validationErrors).length === 0;
        },
        reset() {
            self.email = '';
            self.password = '';
            self.errors = {};
        },
    }));

export const loginStore = LoginStore.create({});