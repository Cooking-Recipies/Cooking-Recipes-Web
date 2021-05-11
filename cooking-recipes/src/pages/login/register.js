import { Fragment, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { isLoggedIn, localStorageKey, login, register } from '../../components/requests/request';
import * as Style from './login.style';

const RegisterPage = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');
    const [loginError, setLoginError] = useState({
        login: null,
        password: null,
        validation: null,
    });

    const loggedIn = isLoggedIn();

    const handleUsermaneInput = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const handleRepPasswordInput = (e) => {
        setRepPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (username.length === 0) { setLoginError({...loginError, login: 'login field is required'}); return; }
        if (password.length === 0) { setLoginError({...loginError, password: 'password field is required'}); return; }
        if (password !== repPassword) { setLoginError({...loginError, password: 'passwords must be identical'}); return; }

        
        register({
            name: username,
            email: `${username}@test.com`,
            password: password,
            password_confirmation: repPassword
        })
        .then(resp => {
            if (resp.data.token) {
                window.localStorage.setItem(localStorageKey, resp.data.token);
                history.push('/');
            } else {
                setLoginError({...loginError, validation: 'Invalid login or password'});
            }
        });
        
    };

    return(
        <Style.LoginBoxWrapper>
            {loggedIn 
            ?
            <Fragment>
                <p>You are already logged in</p>
                <Link to='/'><Style.LoginButton>🦄</Style.LoginButton></Link>
            </Fragment>
            :
            <Style.LoginForm action="" onSubmit={handleLogin}>
                <Style.ErrorMessage>{loginError.login ? loginError.login : ''}</Style.ErrorMessage>
                <Style.LoginInput loginError={loginError.login} value={username} type='text' placeholder='login' onChange={handleUsermaneInput}></Style.LoginInput>

                <Style.ErrorMessage>{loginError.password ? loginError.password : ''}</Style.ErrorMessage>
                <Style.LoginInput loginError={loginError.password} value={password} type='password' placeholder='password' onChange={handlePasswordInput}></Style.LoginInput>

                <Style.LoginInput loginError={loginError.password} value={repPassword} type='password' placeholder='password' onChange={handleRepPasswordInput}></Style.LoginInput>

                <Style.ErrorMessage>{loginError.validation ? loginError.validation : ''}</Style.ErrorMessage>
                <Style.LoginButton type='submit' onClick={handleLogin}>Register</Style.LoginButton>
            </Style.LoginForm>
            }      
            <Fragment>
                <Link to='/login'> If you have an account - Click here!</Link>
                
            </Fragment>     
        </Style.LoginBoxWrapper>
    );
}

export default RegisterPage;