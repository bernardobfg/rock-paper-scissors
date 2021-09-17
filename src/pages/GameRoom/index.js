import { useState } from "react";

import {
    Container,
    TitleArea,
    Score,
    MainArea,
    RulesBtn,
    ModalContainer,
    InnerModal,
    GameResult,
    GameOptions,
    GameOption
} from "./styles";

import logo from "../../assets/logo.svg";
import imageRules from "../../assets/image-rules.svg";
import triangle from "../../assets/bg-triangle.svg";
import scissors from "../../assets/icon-scissors.svg";
import rock from "../../assets/icon-rock.svg";
import paper from "../../assets/icon-paper.svg";
const GameRoom = () => {
    const [score, setScore] = useState(0)
    const [isRulesOpen, setIsRulesOpen] = useState(false)
    const [isTimeToPlay, setIsTimeToPlay] = useState(true)


    const gameOptions = [
        {
            name: "scissors",
            icon: scissors,
            beats: "paper",
            color: ["hsl(39, 89%, 49%) ", "hsl(40, 84%, 53%)"],
        },
        {
            name: "paper",
            icon: paper,
            beats: "rock",
            color: ["hsl(230, 89%, 62%)","hsl(231, 91%, 66%)"],
        },
        {
            name: "rock",
            icon: rock,
            beats: "scissors",
            color: ["hsl(349, 71%, 52%)","hsl(349, 70%, 56%)"],
        }
    ]

    const ModalRules = () => {
        const handleOutsideClick = (e) => {
            if (e.target.id === "modal")
                setIsRulesOpen(false)
        }
        return (
            <ModalContainer id="modal" onClick={handleOutsideClick}>
                <InnerModal>
                    <button onClick={() => setIsRulesOpen(false)}>
                    </button>
                    <img src={imageRules} alt="Rules" />
                </InnerModal>
            </ModalContainer>
        )
    }

    return (
        <>
            {isRulesOpen && <ModalRules />}
            <Container>
                <TitleArea>
                    <img src={logo} alt="logo" />
                    <Score score={score}>
                        <p>Score</p>
                        <h1>{score}</h1>
                    </Score>
                </TitleArea>

                <MainArea>
                    <RulesBtn
                        onClick={() => setIsRulesOpen(!isRulesOpen)}
                    >
                        Rules
                    </RulesBtn>
                    {
                        isTimeToPlay ?
                            <GameOptions>
                                {gameOptions.map((item) => {
                                    return (
                                        <GameOption key={item.name} color={item.color}>
                                            <img src={item.icon} alt={item.name}/>
                                        </GameOption>
                                    )
                                })}
                            </GameOptions> :
                            <GameResult>

                            </GameResult>
                    }
                </MainArea>
            </Container>
        </>
    )
}

export default GameRoom;