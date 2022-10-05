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
        align-items: flex-end;
        gap: 5px;

        h2{
            font-weight: 600;
            color: var(--gray-100);
        }

        span{
            color: var(--color-secondary);
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

    button{
        color: white;
        position: absolute;
        top: 64px;
        right: 25px;
        padding: 8px 10px;
        border-radius: 8px;
        border: 2px solid var(--color-primary);
        background-color: var(--color-primary);
        cursor: pointer;
    }

    @media (min-width: 768px){
        button{
            right: 44px;
        }
    }

    @media (min-width: 1024px){
        flex-direction: row;
        justify-content: space-between;
        padding: 15px 82px;

        input{
            width: 30%;
            margin: 0;
        }

        button{
            top: 21px;
            right: 88px;
        }
    }
`