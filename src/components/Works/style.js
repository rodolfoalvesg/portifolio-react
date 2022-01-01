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
export const HeaderWorks = Styled.header`
   
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
export const ContainerGrid = Styled.div`
    margin-top:30px;
`

export const Row = Styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    // grid-template-columns: 1fr 1fr 1fr;
    gap: 25px; 
    min-height:300px;
    margin-bottom: 25px;

    div{
        border-radius:15px;
        background-color:#5C5D64;
        display:flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;

        span{
            width: 100px;
            height: 100px;
            background-color: #FFB324;
            border-radius:50%;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            justify-content: center;

            img{
                width: 50px;
            }
        }

        h3{
            text-align: center;
            color: #FFF;
            font-size:24px;
            font-weight: 700;
            margin-bottom: 25px;
        }

        p{
            color: #A7AFBD;
            text-align: center;

        }
    }
`