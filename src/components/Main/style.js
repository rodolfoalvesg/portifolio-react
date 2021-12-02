import Styled from 'styled-components'

export const MainStyle = Styled.main`
    width: 100%;
    min-height: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    'section-1 section-2';
    margin-top: 20px;

    .box-1{
        grid-area: section-1;
        display: flex;
        flex-direction: column;

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
    }

    .box-2{
        grid-area: section-2;
        margin: 30px 0;
        position:relative;
        .my-photo{
            img{
                width: 265px;
                height: 300px;
                object-fit: cover;
                object-position: 10% 50%;
                position: absolute;
                right:5px;
                border-radius: 10px;
                box-shadow: 0 0 0 5px #FF451B;
            }
        }
    }

`