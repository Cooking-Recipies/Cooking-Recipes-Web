import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { isLoggedIn, logout } from '../requests/request';
import * as Style from './nabar.style';

const Navbar = () => {
    const history = useHistory();
    const loggedIn = isLoggedIn();

    const handleLogout = () => {
        if (loggedIn) {
            logout();
            history.push('/login');
        }
    }

    return(
        <Style.RecipesNavbar>
            <Style.Logo to='/'>Cooking Recipes</Style.Logo>
            <Style.Logout onClick={handleLogout}>logout</Style.Logout>
        </Style.RecipesNavbar>
    );
};

export default Navbar;