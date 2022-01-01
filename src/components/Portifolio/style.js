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

export const HeaderPortifolio = Styled.header`
   
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

export const ContainerList = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top:30px;
`

export const CardGit = Styled.div`
    display: flex;
    flex-direction: column;
    max-width: 250px;
    min-width: 250px;
    height: 200px;
    border: 1px solid #CC3716;
    margin-bottom: 15px;
    border-radius: 5px;
    padding: 10px;
    position: relative;
    h2{
        font-size: 18px;
        color:#fff;
        text-align: center;
        min-height:50px
    }
    p{
        font-size:12px;
        text-align: justify;
        color: #a7afbd;
    }
    a{
        padding: 5px 10px;
        width: 90%;
        text-decoration: none;
        color:#fff;
        background-color:#CC3716;
        border-radius:5px;
        text-align: center;
        position: absolute;
        bottom: 10px;
        font-size: 14px;
        transition: background-color 0.5s ease-in-out;
    }

    a:hover{
        background-color: #FFB324;
    }
`
