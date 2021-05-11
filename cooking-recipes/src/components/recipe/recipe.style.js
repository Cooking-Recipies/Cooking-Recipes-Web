import styled from 'styled-components';

export const RecipeWrapper = styled.div`
    min-height: 100px;
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    padding: 10px;
    background-color: white;
    border: 2px solid #494776;
    border-radius: 14px;

   
`;

export const RecipeImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 14px;
    border: 2px solid #494776;
    object-fit: contain;
`;

export const InfoWrapper = styled.div`
    padding: 0 20px;
    width: 80%;
`;

export const RecipeName = styled.h3`
    margin: 0;
    font-size: 2em;
`;

export const RecipeDescription = styled.p`
`;

export const ExpandButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    padding-top: 10px;
`;

export const ExpandButton = styled.div`
    width: 31px;
    height: 31px;
    display: flex;
    justify-content: center;
    border: 2px solid #BF7E8A;
    border-radius: 9px;
    align-items: center;
    background-color: #F2AEC7;

    :hover {
        cursor: pointer;
        background-color: #F2AEC7;
    }
`;