import { useFormik } from "formik";
import { validateLoginForm } from "../utils/validation";
import { saveForm } from "../store/loginSlice";
import { useAppDispatch } from '../store';
import { useNavigate } from "react-router-dom";
import Login from "../views/Login";

const LoginFormikContainer = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => validateLoginForm(values.email, values.password),
        onSubmit: (values) => {
            dispatch(saveForm({ email: values.email, password: values.password }));
            console.log('Отправка формы (Formik):', values);
            navigate('/login-formik/success');
        },
    });

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        formik.handleSubmit();
    };

    return <Login 
        email={formik.values.email}
        password={formik.values.password}
        errors={formik.errors}
        onEmailChange={formik.handleChange}
        onPasswordChange={formik.handleChange}
        onSubmit={handleSubmit}
    />
}

export default LoginFormikContainer;