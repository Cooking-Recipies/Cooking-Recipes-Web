import styled from 'styled-components';

export const LoginBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: max(40%, 400px);
    margin: 0 auto;
    padding: 20px;
    background-color: #7977A6;
    border-radius: 14px;
    border: 2px solid #494776;
`;

export const ErrorMessage = styled.span`
    color: #C0C0C0;
    font-size: .9em;
`;

export const LoginInput = styled.input`
    padding: 6px;
    margin: 6px 0;
    width: 100%;
    border-radius: 4px;
    font-weight: bold;
    outline: none;
    border: 2px solid ${({loginError}) => loginError ? 'red' : '#494776'};
    color: #858585;
    
    &:focus {
        outline: none !important;
        border: 2px solid #F2AEC7;
        box-shadow: none;
    }
`;

export const LoginButton = styled.div`
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

