import styled from "styled-components";

export const HeaderStyled = styled.header`
    background-color: var(--gray-0);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 15px 0;

    div{
        display: flex;
        align-items: center;
        gap: 5px;

        img{
            width: 50px;
            height: 50px;
        }

        h2{
            font-weight: 600;
            color: var(--gray-100);
        }

        span{
            color: red;
            font-weight: 600;
        }
    }

    input{
        width: 90%;
        margin: 0 auto;
        border-radius: 8px;
        border: 1px solid var(--gray-20);
        height: 47px;
        padding: 10px;
    }

    @media (min-width: 1024px){
        flex-direction: row;
        justify-content: space-between;
        padding: 15px 82px;

        input{
            width: 25.5%;
            margin: 0;
        }
    }
`