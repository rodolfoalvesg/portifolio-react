import Styled from 'styled-components'

export const Container = Styled.section`
    display: flex;
    height:420px;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 0 10px;


    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
    }

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
    
    
    .profile-box-1{
        display: flex;
        min-height:550px;
 
        width: 50%;
        position: relative;
        @media (max-width: 768px){
            width: 100%;
            min-height:670px;
            flex-direction: column;
        }
    }

    
    .profile-box-2{
        width: 50%;
        padding: 0 20px;
        color: #fff;
        position: relative;
        
        @media (max-width: 768px){
            width: 100%;
        }

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

        a{        
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
        a:hover{
            background-color: #FFB324;

        }
    }
`

export const Section = Styled.div`
    min-height:420px;
   
    figure{
        img{
            width:255px;
            height:320px;
            object-fit: cover;
            border-radius:15px;
            @media (max-width: 768px){
                width: 100%;
                height:256px;
            }
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

    @media (max-width: 768px){
        position: relative;
        width: 100%;
        top: -30px;
        left: 0px;
        margin-bottom: 40px;
    
    }
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