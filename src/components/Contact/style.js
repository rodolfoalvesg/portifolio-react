import Styled from 'styled-components'

export const Container = Styled.section`
    display: flex;
    flex-direction: column;
    height:420px;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 0 10px;
    
    ::-webkit-scrollbar{
        width:5px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius:2px;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`

export const HeaderContact = Styled.header`
   
    h3{
        font-size:21px;
        color:#FF451B;
        font-weight:700;
    }

    h1{
        font-size:35px;
        font-weight:700;
        color:#fff;
    }
`
export const ContainerContacts = Styled.div`
    display: grid;
    grid-template-columns: 40% 1fr;
    gap: 25px;
    margin-top:30px;

    .box{
        width: 100%;
        overflow: hidden;
        min-height:300px;
        display: flex;
        flex-direction: column;
        padding: 0 10px 0 0;

    }
`
export const CardsContact = Styled.div`
    display: flex;
    margin-bottom:20px ;
    gap:10px;
    
    .circle{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        border-radius:50%;
        background-color:#FFB324;

        img{
            width:50px;
            height:50px;
        }
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width:70%;
        overflow: hidden;
        color: #fff;
        p{
            color: #9EAFB6;
            word-wrap: break-word;
        }
    }
`

export const ContainerForm = Styled.form`

    .row{
        display: grid;
        grid-template-columns:1fr 1fr;
        gap: 20px;
        margin-bottom:20px;

        input{
            padding:15px 20px;
            background-color: transparent;
            border: 1px solid rgba(158, 175, 182, 0.3);
            border-radius: 5px;
            outline: none;
            color: #9eafb6;
        }

        input::placeholder{
            color: #9eafb6;
        }
    }

    .row-text{
        textarea{
            width: 100%;
            height: 180px;
            padding:15px 20px;
            background-color: transparent;
            border: 1px solid rgba(158, 175, 182, 0.3);
            border-radius: 5px;
            outline: none;
            color: #9eafb6;
            resize: none;
        }
        textarea::placeholder{
            color: #9eafb6;
        }

    }

    button {
        padding: 15px 30px;
        color: #fff;
        background-color:#FF451B;
        border: none;
        border-radius:10px;
        cursor: pointer;
        transition: all 0.3s ease;
        margin: 20px 0;
        font-weight: 600;
    }

    button:hover {
        background-color:#FFB324;
    }

`