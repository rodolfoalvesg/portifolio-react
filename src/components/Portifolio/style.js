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

