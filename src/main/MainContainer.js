import GameContainer from "../game/GameContainer";
import { useState, useEffect } from "react";
import StolenArtList from "../game/stolenart/StolenArtList";
import Navbar from "./Navbar";

const MainContainer = () => {

    const [gameContainerWidth, setGameContainerWidth] = useState(1082);
    const [gameContainerHeight, setGameContainerHeight] = useState(800);
    // const [gameContainerWidth, setGameContainerWidth] = useState(80);
    // const [gameContainerHeight, setGameContainerHeight] = useState(80);

    const [paintingPosition1X, setPaintingPosition1X] = useState(150);
    const [paintingPosition1Y, setPaintingPosition1Y] = useState(40);    
    const [paintingPosition2X, setPaintingPosition2X] = useState(790);
    const [paintingPosition2Y, setPaintingPosition2Y] = useState(40);    
    const [paintingPosition3X, setPaintingPosition3X] = useState(190);
    const [paintingPosition3Y, setPaintingPosition3Y] = useState(720);    
    const [paintingPosition4X, setPaintingPosition4X] = useState(750);
    const [paintingPosition4Y, setPaintingPosition4Y] = useState(720);    

    const displayMultipleChoiceQuestion = () => {
        console.log("Displays modal for Multiple Choice Question / Displays info about painting, giving the option for the player to select this painting");
    }

    return ( 
        <>
            <Navbar/>
            <GameContainer containerWidth={gameContainerWidth} containerHeight={gameContainerHeight} displayMultipleChoiceQuestion={displayMultipleChoiceQuestion} paintingPosition1X={paintingPosition1X} paintingPosition1Y={paintingPosition1Y} paintingPosition2X={paintingPosition2X} paintingPosition2Y={paintingPosition2Y} paintingPosition3X={paintingPosition3X} paintingPosition3Y={paintingPosition3Y} paintingPosition4X={paintingPosition4X} paintingPosition4Y={paintingPosition4Y}/>
            <StolenArtList />
        </>
     );
}
 
export default MainContainer;
