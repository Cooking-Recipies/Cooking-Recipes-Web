import styled from 'styled-components';
import { Link } from "react-router-dom";

export const RecipesNavbar = styled.nav`
    display: flex;
    align-items: center;
    min-height: 60px;
    padding: 0 30px;
    background-color: #7977A6;
    border-radius: 0 0 14px 14px;
    border-bottom: 2px solid #494776;
`;

export const Logo = styled(Link)`
    font-size: 1.2em;
    padding: 4px 10px;
    color: black;
    text-decoration: none;
    transition: color .1s;

    &:hover {
        color: #F2AEC7;
        cursor: pointer;
        transition: color .1s;
    }
`;

export const Logout = styled.div`
    margin-left: auto;
    cursor: pointer;
`;