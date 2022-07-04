import React, { useState } from "react";
import PlayerInput from "./PlayerInput";
import { Link } from "react-router-dom";
import PlayerPreview from "./PlayerPreview";

const Battle = (props) => {
    const [playerOne, setPlayerOne] = useState({ playerOneName: '', playerOneImage: null })
    const [playerTwo, setPlayerTwo] = useState({ playerTwoName: '', playerTwoImage: null })
  
    const handleSubmitOne = (id, username) => {
        setPlayerOne({
            [id + "Name"]: username,
            [id + "Image"]: `https://github.com/${username}.png?size200`
        })
    }

    const handleSubmitTwo = (id, username) => {
        setPlayerTwo({
            [id + "Name"]: username,
            [id + "Image"]: `https://github.com/${username}.png?size200`
        })
    }

    const handleResetOne = (id) => {
        setPlayerOne({
            [id + "Name"]: "",
            [id + "Image"]: null
        })
    }

    const handleResetTwo = (id) => {
        setPlayerTwo({
            [id + "Name"]: "",
            [id + "Image"]: null
        })
    }


    return (
        <>
            <div className="row">
                {!playerOne.playerOneName ?
                    <PlayerInput
                        id="playerOne"
                        label="Player 1"
                        onSubmit={handleSubmitOne}
                    /> :
                    <PlayerPreview avatar={playerOne.playerOneImage} username={playerOne.playerOneName}>
                        <button className="reset" onClick={() => handleResetOne("playerOne")}>Reset</button>
                    </PlayerPreview>
                }
                {!playerTwo.playerTwoName ?
                    <PlayerInput
                        id="playerTwo"
                        label="Player 2"
                        onSubmit={handleSubmitTwo}
                    /> :
                    <PlayerPreview avatar={playerTwo.playerTwoImage} username={playerTwo.playerTwoName}>
                        <button className="reset" onClick={() => handleResetTwo("playerOne")}>Reset</button>
                    </PlayerPreview>
                }
            </div>
            {playerOne.playerOneName && playerTwo.playerTwoName &&
                <Link className="button" to={{
                    pathname: `${props.match.url}/results`,
                    search: `?playerOneName=${playerOne.playerOneName}&playerTwoName=${playerTwo.playerTwoName}`
                }}>Battle</Link>
            }
        </>
    )

}

export default Battle
