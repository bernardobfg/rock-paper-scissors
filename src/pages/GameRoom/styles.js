import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 30px 0; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color:hsl(237, 49%, 15%);
    background-image: radial-gradient(hsl(214, 43%, 35%), hsl(237, 49%, 15%));
`

export const TitleArea = styled.div`
    width: 600px;
    height: 130px;
    border: 1px solid hsl(217, 16%, 45%);
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Score = styled.div`
    padding: 8px 35px;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.score < 0? "red": props.score === 0? "hsl(0, 0%, 100%)": "rgb(183, 241, 183)"};

    p{
        font-size: 20px;
        color: hsl(229, 25%, 31%);
        font-weight: 500;
    }
    h1{
        font-size: 64px;
        color: hsl(229, 64%, 46%);
    }

`

export const GameArea = styled.div`
    `