import styled from "styled-components";

export const CardCartSyled = styled.li`
    display: flex;

    img{
        width: 95px;
        height: 95px;
    }

    .info{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        p{
            max-width: 10ch;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            color: var(--gray-100);
        }

        .category{
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: var(--gray-50);
        }
    }

    button{
        align-self: flex-start;
        margin: 23px 0px 0px 19px;
        background: none;
        border: none;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: var(--gray-50);
        cursor: pointer;
    }
`