import styled from "styled-components";

export const ListBurgers = styled.ul`
    padding-left: 17px;
    margin: 30px 0;
    display: flex;
    overflow: auto;
    align-items: center;
    gap: 20px;
    min-width: 72.8%;

    li{
        background-color: #ffffff;
        min-width: 250px;
        min-height: 300px;
        border: 2px solid var(--gray-20);
        border-radius: 5px;

        figure{
            background-color: var(--gray-0);
            width: 100%;
            height: 181px;
            text-align: center;

            img{
                width: 171px;
                height: 171px;
                object-fit: cover;
            }
        }

        div{
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 28px 15px;

            h3{
                font-weight: 700;
                font-size: 18px;
                line-height: 24px;
            }

            span{
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                color: var(--gray-50);
            }

            p{
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
                color: var(--color-primary);
            }

            button{
                width: 106px;
                height: 40px;
                background: var(--color-primary);
                border: 2px solid var(--color-primary);
                color: #ffffff;
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                border-radius: 8px;
                cursor: pointer;
            }
        }
    }

    @media (min-width: 1024px){
        overflow: initial;
        flex-wrap: wrap;
    }
`