import { Fragment, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { isLoggedIn, localStorageKey } from '../../components/requests/request';
import * as Style from './login.style';

const LoginPage = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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

    const handleLogin = () => {
        if (username.length === 0) { setLoginError({...loginError, login: 'login field is required'}); return; }
        if (password.length === 0) { setLoginError({...loginError, password: 'password field is required'}); return; }

        if (username === 'login' && password === 'password') {
            let loginPromise = new Promise((resolve, reject) => resolve(true));
            
            loginPromise
            .then(window.localStorage.setItem(localStorageKey, '__token__'))
            .then(history.push('/'))
            .catch(setLoginError({...loginError, validation: 'Validation service error'}))
        } else {
            setLoginError({...loginError, validation: 'Invalid login or password'});
        }
    };

    return(
        <Style.LoginBoxWrapper>
            {loggedIn 
            ?
            <Fragment>
                <p>You are already logged in</p>
                <Link to='/'><Style.LoginButton onClick={handleLogin}>🦄</Style.LoginButton></Link>
            </Fragment>
            :
            <Fragment>
                <Style.ErrorMessage>{loginError.login ? loginError.login : ''}</Style.ErrorMessage>
                <Style.LoginInput loginError={loginError.login} value={username} type='text' placeholder='login' onChange={handleUsermaneInput}></Style.LoginInput>
                <Style.ErrorMessage>{loginError.password ? loginError.password : ''}</Style.ErrorMessage>
                <Style.LoginInput loginError={loginError.password} value={password} type='text' placeholder='password' onChange={handlePasswordInput}></Style.LoginInput>
                <Style.ErrorMessage>{loginError.validation ? loginError.validation : ''}</Style.ErrorMessage>
                <Style.LoginButton onClick={handleLogin}>🦄</Style.LoginButton>
            </Fragment>
            }
            
        </Style.LoginBoxWrapper>
    );
};

export default LoginPage;