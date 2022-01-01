import Styled from 'styled-components'

export const Container = Styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    
    .profile-box-1{
        display: flex;
        position: relative;
        overflow-x: hidden; ;
        overflow-y: scroll;

    }

    .profile-box-1::-webkit-scrollbar{
        width:5px;
        
    }

    .profile-box-1::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius:2px;
    }

    .profile-box-1::-webkit-scrollbar-thumb {
        background: #888;
    }
    .profile-box-1::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .profile-box-2{
        padding: 0 20px;
        color: #fff;
        h3{
            color: #ff451b;
            margin-bottom: 15px;
            font-size:21px;
        }
        h1 {
            font-size:35px;
            font-weight:600;
            margin-bottom: 15px;
        }

        p{
            color: #a7afbd;
            line-height:1.6;
            margin-bottom:30px;
        }

        button{        
            display: inline-flex;
            border: none;
            padding: 10px 30px;
            background-color: #ff451b;
            border-radius:10px;
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
           
        }
        button:hover{
            background-color: #FFB324;

        }
    }

    

`

export const Section = Styled.div`

    min-height:420px;
    overflow: hidden;
   

    figure{
        img{
            
            width:255px;
            height:320px;
            object-fit: cover;
            border-radius:15px
        }
    }
`

export const CardProfile = Styled.div`
    width: 210px;
    min-height: 400px;
    background-color: #FF451B;
    position: absolute;
    top: 50px;
    left: 200px;
    border-radius:15px;
    padding:20px;
    overflow: hidden;

    ul {
        list-style-type: none;
        width: 90%;
        li{
            border-bottom: 1px dashed rgba(255,255,255,.3);
            margin-bottom:15px;

            h3{
                font-size:14px;
                color: #fff;
                opacity: 0.85;
                font-weight:400;
            }

            span{
                color: #fff;
                font-weight:600;
                word-break: break-all;
                
            }
        }
    }

    

`