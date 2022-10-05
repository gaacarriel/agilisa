import styled from "styled-components";

export const CartBurgers = styled.div`
    margin-bottom: 10px;

    span{
        margin: 0 auto;
        border-radius: 8px 8px 0px 0;
        background: var(--color-primary);
        width: 90%;
        height: 40px;
        padding: 15px;
        display: flex;
        align-items: center;
        color: white;
        font-size: 18px;
        line-height: 24px;
    };

    ul{
        min-height: 150px;
        width: 90%;
        margin: 0 auto;
        background-color: var(--gray-0);
        border-radius: 0 0 8px 8px;
        max-height: 230px;
        overflow: auto;

        .div{
            min-height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 0 0 8px 8px;

            h3{
                font-weight: 700;
                font-size: 18px;
                line-height: 24px;
            }

            p{
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
                color: var(--gray-50);
            }
        }
    }

    section{
        width: 90%;
        margin: 0 auto;
        padding: 0 15px;
        background-color: var(--gray-0);
        border-radius: 0 0 8px 8px;

        div{
            display: flex;
            justify-content: space-between;
            width: 100%;
            border-top: 1px solid var(--gray-50);
            padding: 5px 0;

            h5{
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
                color: var(--gray-100);
            }

            p{
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
                color: #828282;
            }
        }

        button{
            width: 100%;
            height: 45px;
            background: var(--gray-20);
            border: 2px solid var(--gray-20);
            color: var(--gray-100);
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            cursor: pointer;
            margin-bottom: 10px;
        }
    }

    @media (min-width: 768px){
        width: 50%;
        margin: 0 auto;
    }

    @media (min-width: 1024px){
        max-width: 355px;
        margin-top: 30px;
    }
`