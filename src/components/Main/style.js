import Styled from 'styled-components'

export const MainStyle = Styled.main`
    width: 100%;
    min-height: 400px;
    display: flex;
    margin-top: 20px;


    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
    }
    
    .box-1{
        display: flex;
        flex-direction: column;
        width: 50%;

        h3{
            font-size: 25px;
            color: #ff451b;
            font-weight: 700;
            margin: 20px 0;
        }

        h1{
            color: #fff;
            font-size:70px;
            font-weight:700;
            line-height: 5rem;
            margin-bottom:20px ;
        }

        p{
            color: #a7afbd;
            font-size: 18px;
            line-height:1.6rem
        }
        @media (max-width: 768px){
            display: flex;
            flex-direction: column;
            width: 100%;
            text-align: center;
        }
    }

    .box-2{
        display: flex;
        justify-content: flex-end;
        width: 50%;
        overflow: hidden;
        .my-photo{
            img{
                width: 265px;
                height: 300px;
                object-fit: cover;
                object-position: 10% 50%;
                border-radius: 10px;
                box-shadow: 0 0 0 5px #FF451B;
                margin-top:40px;
                margin-right: 5px;
            }
            @media (max-width: 768px){
                margin-top: -40px;
            }
        }
        @media (max-width: 768px){
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            min-height: 400px;
        }
    }

`