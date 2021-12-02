import Styled from 'styled-components'

export const NavStyle = Styled.nav`
    ul{
        display: flex;
        list-style: none;
        gap: 10px;

        a{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-left: 35px;
            width: 100px;
            height: 100px;
            background-color: #494B50;
            border-radius:10px;
            transition: all .5s ease-in-out;
            text-decoration: none;
            color: #fff;

            li{
                display: flex;
                overflow: hidden;
                span{
                    display: none;
                    color: #fff;
                    font-weight: 400;
                    margin-left:20px;
                }

                img{
                    width: 30px;
                }
            }
        }
        a:hover, a:focus{
            width: 200px;   
            
            span{
              display: flex;  
            } 
            
        }

        a:focus{
            background-color: #FF451B;
        }
        


        
    }
`