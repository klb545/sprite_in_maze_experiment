import GameContainer from "../game/GameContainer";
import { useState, useEffect } from "react";
import StolenArtList from "../game/stolenart/StolenArtList";
import Navbar from "./Navbar";

const MainContainer = () => {

    const [gameContainerWidth, setGameContainerWidth] = useState(1082);
    const [gameContainerHeight, setGameContainerHeight] = useState(800);
    // const [gameContainerWidth, setGameContainerWidth] = useState(80);
    // const [gameContainerHeight, setGameContainerHeight] = useState(80);

    const [paintingPositionX, setPaintingPositionX] = useState(270);
    const [paintingPositionY, setPaintingPositionY] = useState(255);    

    const displayMultipleChoiceQuestion = () => {
        console.log("Displays modal for Multiple Choice Question / Displays info about painting, giving the option for the player to select this painting");
    }

    return ( 
        <>
            <Navbar/>
            <GameContainer containerWidth={gameContainerWidth} containerHeight={gameContainerHeight} displayMultipleChoiceQuestion={displayMultipleChoiceQuestion} paintingPositionX={paintingPositionX} paintingPositionY={paintingPositionY}/>
            <StolenArtList />
        </>
     );
}
 
export default MainContainer;
