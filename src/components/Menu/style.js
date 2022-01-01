import Styled from 'styled-components'

export const NavStyle = Styled.nav`
    ul{
        display: flex;
        list-style: none;
        gap: 10px;

        button{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-left: 35px;
            border:none;
            width: 100px;
            height: 100px;
            background-color: #494B50;
            border-radius:10px;
            transition: all .6s ease-in-out;
            color: #fff;
            cursor: pointer;
            

            li{
                display: flex;
                overflow: hidden;
                span{
                    display: none;
                    color: #fff;
                    font-weight: 400;
                    margin-left:20px;
                    font-family: "Poppins", Arial, sans-serif;
                    font-weight: bold;
                }

                img{
                    width: 30px;
                }
            }
        }
        button:hover, button:focus{
            width: 200px;   
            
            span{
              display: flex;  
              justify-content:center;
              align-items: center;
            } 
            
        }

        button:focus{
            background-color: #FF451B;
        }
        


        
    }
`