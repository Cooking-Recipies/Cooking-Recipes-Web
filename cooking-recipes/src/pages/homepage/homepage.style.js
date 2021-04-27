import styled from 'styled-components';
import { Link } from "react-router-dom";

export const ContentBox = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const FiltersWrapper = styled.div`
    display: flex;
`;

export const FilterSelect = styled.select`
    cursor: pointer;
    border-radius: 9px;
    border: solid 2px #494776;
    background-color: #ffffff;
    font-size: 1em;
    font-weight: 500;
    padding: 13px 50px 13px 16px;
    margin-right: 30px;
    appearance: none;
    font-weight: bolder;
`;

export const AddRecipe = styled(Link)`
    cursor: pointer;
    border-radius: 9px;
    border: solid 2px #494776;
    background-color: #ffffff;
    font-size: 1em;
    font-weight: 500;
    padding: 13px 16px;
    appearance: none;
    font-weight: bolder;
    margin-left: auto;
    color: black;
    text-decoration: none;
    user-select: none;
    transition: background-color .1s; 

    &:hover {
        background-color: #F2AEC7;
    }

    &:active {
        background-color: #7977A6;
        transition: background-color .0s; 
    }
`;