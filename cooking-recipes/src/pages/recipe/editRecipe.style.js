import styled from 'styled-components';

export const RecipeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #7977A6;
    border: 2px solid #494776;
    border-radius: 14px;
`;

export const RecipeLabel = styled.label`
    font-size: .9em;
`;

export const RecipeInput = styled.input`
    padding: 6px;
    margin: 6px 0;
    border-radius: 4px;
    font-weight: bold;
    outline: none;
    border: 2px solid #494776;
    color: #858585;
    
    &:focus {
        outline: none !important;
        border: 2px solid #F2AEC7;
        box-shadow: none;
    }
`;

export const RecipeTextarea = styled.textarea`
    padding: 6px;
    margin: 6px 0;
    border-radius: 4px;
    font-weight: bold;
    outline: none;
    border: 2px solid #494776;
    color: #858585;
    resize: vertical;

    &:focus {
        outline: none !important;
        border: 2px solid #F2AEC7;
        box-shadow: none;
    }
`;

export const ImageInput = styled.input`
`;

export const RecipeButton = styled.div`
    font-size: 2em;
    padding: .2em;
    margin: 10px auto;
    border-radius: 4px;
    background-color: #7977A6;
    border: 3px solid #494776;
    user-select: none;
    transition: border-color .2s;

    &:hover {
        cursor: pointer;
    }

    &:active {
        border-color: #F2AEC7;
        transition: border-color .0s;
    }
`;