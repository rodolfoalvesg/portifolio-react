import Styled, {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #1d1b1b;
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        cursor: url('../assets/teste.cur', pointer);
    }

    .react-modal-overlay {
        background-color: rgba(0, 0, 0, 0.2);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

    }

    .react-modal-content {
        width: 100%;
        max-width: 75%;
        height: 75vh;
        background-color: #494B50;
        padding: 2rem 1.5rem;
        position: relative;
        border-radius: 10px;
        overflow: hidden;

        @media (max-width: 768px){
            width: 100%;
            max-width:90%;
            height: 90vh;
        }
    }

    .react-modal-close{
        position: absolute;
        right: 16px;
        top: 5px;
        border: 0;
        background: transparent;
        cursor: pointer;
        transition: transform 0.3s;
        img{
            width: 20px;
        }
    }

    .react-modal-close:hover{
        transform: scale(1.2);
    }
`;

export const GlobalBackground = Styled.section` 
    width: 100%;
    height: 100vh;
    background-color: #34353A;
    clip-path: polygon(60% 0%, 80% 50%, 0% 100%, 0% 0%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
`;

export const Container = Styled.div`
    width: 75%;
    height: 100vh;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    
`;

