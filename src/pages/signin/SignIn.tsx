import * as React from 'react';
import axios from 'axios';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { login } from 'my-redux/action-creators/authentication.action-creator';
import { connect, useSelector } from 'react-redux';
import { AppState } from 'my-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './SignIn.scss';
import * as Yup from 'yup';
import ButtonWrapper from 'styles/styled-components/button-wrapper';

interface IProps {
    logInConnect: () => void;
}

type LoginForm = {
    email: string;
    password: string;
};

const SignIn = ({ logInConnect }: IProps) => {


    const validationSchema = Yup.object().shape({
        // email: Yup.string()
        //     .required('Email is required')
        //     .email('Email is invalid'),
        // password: Yup.string()
        //     .required('Password is required')
        //     .min(6, 'Password must be at least 6 characters')
        //     .max(40, 'Password must not exceed 40 characters'),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<LoginForm>({
        resolver: yupResolver(validationSchema),
        shouldFocusError: false,
    });

    const isAuthenticated = useSelector((state: AppState) => state.authenticationReducer.isAuthenticated);
    if (isAuthenticated) {
        reset();
        return <Redirect to="/" />;
    }

    const onSubmit = (data: LoginForm) => {
        console.log(JSON.stringify(data, null, 2));
        logInConnect();
    };

    return (
        <div className="custom-container">
            <div className="content-wrapper">
                <div className="content">
                    <div className="left-content">
                        <div className="logo">
                            <img src="/logo192.png" alt="" />
                        </div>

                        <div className="title">
                            <p className="text-white">Vi đô</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                            <div className="form-group custom-input text-white">
                                <input
                                    autoFocus={false}
                                    placeholder=" "
                                    type="text"
                                    {...register('email')}
                                    className={`form-control text-white ${errors.email ? 'is-invalid' : ''}`}
                                />
                                <label htmlFor="email">Email</label>
                                <div className="invalid-feedback">{errors.email?.message}</div>
                            </div>

                            <div className="form-group custom-input text-white">
                                <input
                                    placeholder=" "
                                    type="password"
                                    {...register('password')}
                                    className={`form-control text-white ${errors.password ? 'is-invalid' : ''}`}
                                />
                                <label htmlFor="password">Password</label>
                                <div className="invalid-feedback">{errors.password?.message}</div>
                            </div>
                            <div className="form-group">

                                <ButtonWrapper type="submit" className="btn text-white bg-orange btn-submit">
                                    <span>Login</span>
                                </ButtonWrapper>
                            </div>
                        </form>

                        <div className="footer-label">
                            <p className="text-white">Don't have an account yet? <span className="text-orange">Register</span></p>
                        </div>
                    </div>

                    <div className="right-content">
                        <img src="/login.jpeg" />
                    </div>
                </div>
                <div className="bg"></div>
            </div>
        </div>
    )
}

const mapDispatchToProps = { logInConnect: login };
export default connect(null, mapDispatchToProps)(SignIn);