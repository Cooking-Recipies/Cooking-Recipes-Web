import styled from 'styled-components';

export const ReviewWrapper = styled.form`
    min-height: 100px;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    padding: 10px;
    background-color: white;
    border: 2px solid #494776;
    border-radius: 14px;
`;

export const ReviewTextarea = styled.textarea`
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

export const ReviewSelect = styled.select`
    max-width: 200px;
`;

export const ReviewButton = styled.button`
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