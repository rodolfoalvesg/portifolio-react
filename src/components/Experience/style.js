import Styled from 'styled-components'

export const Container = Styled.section`
    display: flex;
    flex-direction: column;
    height:420px;
    overflow-x: hidden;
    overflow-y: scroll;

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

export const HeaderProfile = Styled.header`
   
    h3{
        font-size:21px;
        color:#FF451B;
        font-weight:700;
    }

    h1{
        font-size:35px;
        font-weight:700;
        color:#fff;
        @media (max-width: 768px){
            font-size:24px;
        }
    }
`

export const Section = Styled.section` 
    display:flex;
    margin-top: 30px;
    color: #fff;
    gap: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }

    .box-1, .box-2 {
        width: 50%;
        position: relative;
        @media (max-width: 768px){
            width: 100%;
        }

        h2{
            font-weight:700;
            font-size:36px;
            margin-left:40px;
            @media (max-width: 768px){
                font-size:20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        .shape{
            border: 1px solid #fff;
            position: absolute;
            transform: translateY(-50%);
            left: 0;
            top: 25px;
            width: 24px;
            height: 24px;
            border-radius: 100%;
            border: 3px solid #ff451b;
            @media (max-width: 768px){
                top: 0;
                width:18px;
                height: 18px;
                top: 15px;
            }
        }

        .shape:before {
            position: absolute;
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 100%;
            background-color: #ff451b;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }
        
}
`

export const CardExperiences = Styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom:30px;
    padding-right:20px;

    h3{
        font-size:19px;
        font-weight:600;
        @media (max-width: 768px){
            font-size:16px
        }
    }

    span{
        color: #d3d7df;
        font-weight: 400;
        @media (max-width: 768px){
            font-size:14px
        }
    }
    p{
        color:#a7afbd;
        font-weight:400;
        @media (max-width: 768px){
            font-size:12px
        }
    }

    .data{
        position: absolute;
        padding:5px 20px;
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 10px;
        color: #FF451B;
        font-weight: 400;
        font-size:15px;
        right: 0;
        top: 0;
        @media (max-width: 768px){
            position: relative;
            text-align: center;
        }
    }

    @keyframes progress-animation{
        0% { width: 0%; }
        
        100% { width: 85%}
    
    }


    progress{
        width: 100%;
        height:30px;
        appearance:none;

        @media (max-width: 768px){
           height:20px;
        }
        
        ::-webkit-progress-bar{
        height:30px;
        border-radius: 20px;
        background-color: #eee;
        @media (max-width: 768px){
            height: 20px;
            border-radius:10px;
        }
    }

        ::-webkit-progress-value{
            height:30px;
            border-radius: 20px;
            background-color: #ff451b;
            @media (max-width: 768px){
                height: 20px;
                border-radius:10px;
            }
        }
    }


    .valueBar{
        text-align: center;
        margin-bottom:20px;
        color: #FF451B;
        font-weight: 600;
    }
    
`

export const HeaderCards = Styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
   @media (max-width: 768px){
        margin-bottom: 30px;
   }
    
`