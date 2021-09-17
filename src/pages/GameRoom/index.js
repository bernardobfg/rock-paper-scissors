import { useState } from "react";

import {
    Container,
    TitleArea,
    GameArea,
    Score
} from "./styles";

import logo from "../../assets/logo.svg";

const GameRoom = () => {
    const [score, setScore] = useState(0)
    return (
        <Container>
            <TitleArea>
                <img src={logo} alt="logo" />
                <Score score={score}>
                    <p>Score</p>
                    <h1>{score}</h1>
                </Score>
            </TitleArea>
            
            <GameArea></GameArea>
        </Container>
    )
}

export default GameRoom;