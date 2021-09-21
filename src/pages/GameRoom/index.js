import { useState, useEffect } from "react";

import {
    Container,
    TitleArea,
    ToggleArea,
    ToggleButton,
    Score,
    MainArea,
    RulesBtn,
    ModalContainer,
    InnerModal,
    GameResult,
    GameOptions,
    GameOption,
    SelectedOption,
    PlayAgain,
    PlayAgainBtn,
    Result
} from "./styles";

import logo from "../../assets/logo.svg";
import logoBonus from "../../assets/logo-bonus.svg";
import imageRules from "../../assets/image-rules.svg";
import imageRulesBonus from "../../assets/image-rules-bonus.svg";
import scissors from "../../assets/icon-scissors.svg";
import rock from "../../assets/icon-rock.svg";
import paper from "../../assets/icon-paper.svg";
import lizard from "../../assets/icon-lizard.svg";
import spock from "../../assets/icon-spock.svg";
const options = [
    {
        name: "scissors",
        icon: scissors,
        beats: ["paper", "lizard"],
        color: ["hsl(39, 89%, 49%) ", "hsl(40, 84%, 53%)"],
    },
    {
        name: "paper",
        icon: paper,
        beats: ["rock", "spock"],
        color: ["hsl(230, 89%, 62%)", "hsl(231, 91%, 66%)"],
    },
    {
        name: "rock",
        icon: rock,
        beats: ["scissors", "lizard"],
        color: ["hsl(349, 71%, 52%)", "hsl(349, 70%, 56%)"],
    },
    {
        name: "lizard",
        icon: lizard,
        beats: ["spock", "paper"],
        color: ["hsl(261, 73%, 60%)", "hsl(261, 72%, 63%)"],
    },
    {
        name: "spock",
        icon: spock,
        beats: ["scissors", "rock"],
        color: ["hsl(189, 59%, 53%)", "hsl(189, 58%, 57%)"],
    }

]

const GameRoom = () => {
    const [bonusVersion, setBonusVersion] = useState(false)
    const [gameOptions, setGameOptions] = useState(options.slice(0, 3))
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(null);
    const [isRulesOpen, setIsRulesOpen] = useState(false);
    const [isTimeToPlay, setIsTimeToPlay] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null)
    const [selectedRandomOption, setSelectedRandomOption] = useState(null)
    const [isRoundEnd, setIsRoundEnd] = useState(false)

    useEffect(() => {
        setGameOptions(
            bonusVersion ?
                options :
                options.slice(0, 3)

        )
    }, [bonusVersion])


    const handleSelectOption = (option) => {
        setSelectedOption(option)
        setIsTimeToPlay(false)
        const randomNumber = Math.floor((Math.random() * gameOptions.length));
        const randomOption = gameOptions[randomNumber];
        setTimeout(() => setSelectedRandomOption(randomOption), 1000)
        setTimeout(() => {
            if (option.beats.includes(randomOption.name)) {
                setScore(score + 1);
                setResult("WIN")
            }
            else if (randomOption.beats.includes(option.name)) {
                setScore(score - 1);
                setResult("LOSE")
            }
            else {
                setResult("DRAW")
            }
            setIsRoundEnd(true);
        }, 2000)
    }
    const handlePlayAgain = () => {
        setIsTimeToPlay(true)
        setIsRoundEnd(false)
        setSelectedRandomOption(null)
        setSelectedOption(null)
        setResult(null)
    }
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
                    <img src={bonusVersion? imageRulesBonus: imageRules} alt="Rules" />
                </InnerModal>
            </ModalContainer>
        )
    }

    return (
        <>
            {isRulesOpen && <ModalRules />}
            <Container>
                <TitleArea>
                    <img src={bonusVersion ? logoBonus : logo} alt="logo" />
                    <Score score={score}>
                        <p>Score</p>
                        <h1>{score}</h1>
                    </Score>
                </TitleArea>

                <MainArea>
                    <ToggleArea>
                        V1
                        <ToggleButton onClick={() => setBonusVersion(!bonusVersion)} bonusVersion={bonusVersion}>
                            <span></span>
                        </ToggleButton>
                        V2
                    </ToggleArea>
                    <RulesBtn onClick={() => setIsRulesOpen(!isRulesOpen)}>
                        Rules
                    </RulesBtn>
                    

                    {
                        isTimeToPlay ?
                            <GameOptions bonusVersion={bonusVersion}>
                                {gameOptions.map((item) => {
                                    return (
                                        <GameOption
                                            key={item.name}
                                            name={item.name}
                                            color={item.color}
                                            bonusVersion={bonusVersion}
                                            onClick={() => handleSelectOption(item)}
                                        >
                                            <img src={item.icon} alt={item.name} />
                                        </GameOption>
                                    )
                                })}
                            </GameOptions> :
                            <GameResult>
                                <SelectedOption
                                    color={selectedOption?.color}
                                >
                                    <img src={selectedOption?.icon} alt={selectedOption?.name} />
                                </SelectedOption>
                                <PlayAgain>
                                    {
                                        isRoundEnd &&
                                        <>
                                            <Result>
                                                {result === "DRAW" ?
                                                    `${result}😶` : `YOU ${result} ${result === "WIN" ? "🥳" : "😭"}`}
                                            </Result>
                                            <PlayAgainBtn onClick={handlePlayAgain}>
                                                PlayAgain
                                            </PlayAgainBtn>
                                        </>
                                    }
                                </PlayAgain>

                                {
                                    selectedRandomOption &&
                                    <SelectedOption
                                        color={selectedRandomOption?.color}
                                    >
                                        <img src={selectedRandomOption?.icon} alt={selectedRandomOption?.name} />
                                    </SelectedOption>
                                }
                            </GameResult>
                    }
                </MainArea>
            </Container>
        </>
    )
}

export default GameRoom;