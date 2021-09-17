import styled from "styled-components";
import triangle from "../../assets/bg-triangle.svg";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color:hsl(237, 49%, 15%);
    background-image: radial-gradient(hsl(214, 43%, 35%), hsl(237, 49%, 15%));
`

export const TitleArea = styled.div`
    margin-top: 30px;
    width: 600px;
    height: 130px;
    border: 1px solid hsl(217, 16%, 45%);
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media(max-width: 768px) {
        width: 95vw;
    }
`

export const Score = styled.div`
    padding: 8px 35px;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    background-color: ${props =>
        props.score < 0 ? "#e34e16" : props.score === 0 ? "hsl(0, 0%, 100%)" : "rgb(183, 241, 183)"};

    p{
        font-size: 20px;
        color: hsl(229, 25%, 31%);
        font-weight: 500;
    }
    h1{
        font-size: 64px;
        color: hsl(229, 64%, 46%);
    }
    @media(max-width: 768px) {
        padding: 3px 25px;
    }

`

export const MainArea = styled.div`
    margin-top: 40px;    
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const RulesBtn = styled.button`
    background-color: transparent;
    width: 100px;
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    border: 1px solid hsl(217, 16%, 45%);
    &:hover{
        background-color:hsl(217, 16%, 45%);
    }
`

export const ModalContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: hsla(0, 0%, 0%, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InnerModal = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 10px;
    display: flex;
    z-index: 1000;
    background-color: hsl(0, 0%, 100%);
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 30px;

    button{
        align-self: flex-end;
        margin-bottom: 50px;
        background-color:transparent;
        cursor: pointer;
        padding: 15px;
        &:before,
        &:after{
            content: " ";
            position: absolute;
            width: 2.5px;
            height: 24px;
            background-color: #B5B8C8;
        }
        &:before{
            transform: rotate(45deg);
        }
        &:after{
            transform: rotate(-45deg);
        }
    }

`
export const GameOptions = styled.div`
    margin-top: 50px;
    width: 400px;
    height: 300px;
    background-image: url(${triangle});
    background-position: 50% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    z-index: 0;
`

export const GameOption = styled.button`
    width: 130px;
    height: 130px;
    border-radius: 100%;
    cursor: pointer;
    background-color: hsl(0, 0%, 100%);
    border: 15px solid ${props => props.color && props.color[0]};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: ${props => props.name === "paper" && "-200px"};
    @media(max-width: 768px) {
        width: 100px;
        height: 100px;
    }
    &:hover{
        transform: scale(1.1);
        transition: ease-in 300ms;
        opacity: 0.85;
        border: 17px solid ${props => props.color &&  props.color[1]};

        img{
            transform: rotateZ(360deg);
            transition: transform 1s;
        }
        
    }

`


export const GameResult = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    @media(max-width: 600px){
        width: 100vw;
    }
`

export const SelectedOption = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 100%;
    cursor: pointer;
    background-color: hsl(0, 0%, 100%);
    border: 15px solid ${props => props.color && props.color[0]};
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 768px) {
        width: 100px;
        height: 100px;
    }
    @media(max-width: 400px) {
        width: 80px;
        height: 80px;
    }
`
export const PlayAgain = styled.div`
    width: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width:600px){
        width: 120px;
    }
`

export const PlayAgainBtn = styled.button`
    width: 100%;
    height: 40px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    background-color: #fff;
`

export const Result = styled.h1`
    color: #fff;
    margin-bottom: 20px;
    white-space: nowrap;
    @media(max-width:600px){
        font-size: 26px;
    }
`