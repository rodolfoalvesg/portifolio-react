import Styled from 'styled-components'

export const HeaderMain = Styled.header`
    width:100%;
    min-height:60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #logo{
        width:200px;
    }

    div{
        display: flex;
        align-items: center;
        ul{
            display: flex;
            list-style: none;
            li{
                margin: 0 5px;
                img{
                    width:20px;
                    height:20px;
                }   
            }
            li:nth-child(5) {
               margin-right: 50px;
            }

            li:hover{
                transform: scale(1.1)
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
    }
`