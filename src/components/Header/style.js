import Styled from 'styled-components'

export const HeaderMain = Styled.header`
    width:100%;
    min-height:60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }

    #logo{
        width:300px;
    }

    div{
        display: flex;
        align-items: center;
        ul{
            display: flex;
            list-style: none;
            margin-right: 40px;
            li{
                margin: 0 5px;
                transition: all 0.3s ease;
                img{
                    width:30px;
                    height:30px;
                }   
            }

            li:hover{
                transform: scale(1.1)
            }
            @media (max-width: 768px){
                margin-right:0;
            }
        }

        .btn-cv{
            text-decoration: none;
            padding: 10px 30px;
            background-color:#ff451b;
            color:#fff;
            font-weight: 600;
            border-radius:10px;
            transition: all .3s ease;
        }

        .btn-cv:hover{
            background-color: #FFB324;
        }

        @media (max-width: 768px){
            display: none;
            flex-direction: column;

        }
    }
`