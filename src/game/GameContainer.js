import Paintings from "./paintings/Paintings";
import Thief from "./Thief";
import { useState } from "react";
import mapImage from '../images/mapPrototype2.png';

const GameContainer = ({containerWidth, containerHeight, addFishToCaughtFishList, treasurePositionX, treasurePositionY}) => {
    const [boatPositionX, setBoatPositionX] = useState(500);
    const [boatPositionY, setBoatPositionY] = useState(500);
    const [boatImage, setboatImage] = useState("heading left");
    
    const boatSpeed = 5;

    const checkIfNearFish = () => {
        const proximityLimit = 40;
        const distance = Math.sqrt(Math.pow(boatPositionX - treasurePositionX, 2) + Math.pow(boatPositionY - treasurePositionY, 2));
        if (distance <= proximityLimit) {
            addFishToCaughtFishList();
          }
    }
    // 0, 43, 85, 128, 
    const moveRight = () => {
        if((boatPositionX <= 495)){
            if(boatPositionY >= 495){
                if(boatPositionX >= 450){
                    setBoatPositionX(boatPositionX + boatSpeed);
                    setboatImage("heading right");
                }
                if(boatPositionX <= 310){
                    setBoatPositionX(boatPositionX + boatSpeed);
                    setboatImage("heading right");
                }
            }
            if(boatPositionY >= 315 && boatPositionY <= 490){
                if(boatPositionX >= 450){
                    setBoatPositionX(boatPositionX + boatSpeed);
                    setboatImage("heading right");
                }
                if(boatPositionX <= 85){
                    setBoatPositionX(boatPositionX + boatSpeed);
                    setboatImage("heading right");
                }
            }
            if(boatPositionY >= 265 && boatPositionY <= 315){
                setBoatPositionX(boatPositionX + boatSpeed);
                setboatImage("heading right");
            }
            if(boatPositionY >= 90 && boatPositionY <= 265){
                if(boatPositionX >= 90 && boatPositionX <= 160){
                    setBoatPositionX(boatPositionX + boatSpeed);
                    setboatImage("heading right");
                }
                if(boatPositionX >= 400 && boatPositionX <= 530){
                    setBoatPositionX(boatPositionX + boatSpeed);
                    setboatImage("heading right");
                }
            }
            if(boatPositionY >= 40 && boatPositionY <= 90){
                setBoatPositionX(boatPositionX + boatSpeed);
                setboatImage("heading right");
            }
            if(boatPositionY > 0 && boatPositionY <= 40){
                if(boatPositionX >= 90 && boatPositionX <= 160){
                    setBoatPositionX(boatPositionX + boatSpeed);
                    setboatImage("heading right");
                }
            }
        }
    }
    const moveLeft = () => {
        if(boatPositionX >= 45){
            if(boatPositionY >= 490){
                if(boatPositionX >= 460 && boatPositionX <= 530){
                    setBoatPositionX(boatPositionX - boatSpeed);
                    setboatImage("heading left");
                }
                if(boatPositionX <= 320){
                    setBoatPositionX(boatPositionX - boatSpeed);
                    setboatImage("heading left");
                }
            }
            if(boatPositionY >= 315 && boatPositionY <= 490){
                if(boatPositionX >= 460){
                    setBoatPositionX(boatPositionX - boatSpeed);
                    setboatImage("heading left");
                }
                if(boatPositionX <= 100){
                    setBoatPositionX(boatPositionX - boatSpeed);
                    setboatImage("heading left");
                }
            }
            if(boatPositionY >= 265 && boatPositionY <= 315){
                setBoatPositionX(boatPositionX - boatSpeed);
                setboatImage("heading left");
            }
            if(boatPositionY >= 90 && boatPositionY <= 265){
                if(boatPositionX >= 460){
                    setBoatPositionX(boatPositionX - boatSpeed);
                    setboatImage("heading left");
                }
                if(boatPositionX >= 120 && boatPositionX <= 200){
                    setBoatPositionX(boatPositionX - boatSpeed);
                    setboatImage("heading left");
                }
            }
            if(boatPositionY >= 40 && boatPositionY <= 90){
                setBoatPositionX(boatPositionX - boatSpeed);
                setboatImage("heading left");
            }
            if(boatPositionY > 0 && boatPositionY <= 40){
                if(boatPositionX >= 120 && boatPositionX <= 200){
                    setBoatPositionX(boatPositionX - boatSpeed);
                    setboatImage("heading left");
                }
            }
        }
    }
    const moveDown = () => {
        if((boatPositionX >= 455 && boatPositionX <= 600 && boatPositionY <= 530)){
            setBoatPositionY(boatPositionY + boatSpeed);
        }
        if(boatPositionX >= 160 && boatPositionX <= 455){
            if(boatPositionY <= 80){
                setBoatPositionY(boatPositionY + boatSpeed);
            }
            if(boatPositionY <= 310 && boatPositionY >= 100){
                setBoatPositionY(boatPositionY + boatSpeed);
            }
            if(boatPositionY <= 530 && boatPositionY >= 400){
                setBoatPositionY(boatPositionY + boatSpeed);
            }
        }
        if((boatPositionX >= 120 && boatPositionX <= 160)){
            if(boatPositionY <= 310){
                setBoatPositionY(boatPositionY + boatSpeed);
            }
            if(boatPositionY <= 530 && boatPositionY >= 400){
                setBoatPositionY(boatPositionY + boatSpeed);
            }
        }
        if((boatPositionX >= 90 && boatPositionX <= 120)){
            if(boatPositionY >= 530){
                setBoatPositionY(boatPositionY + boatSpeed);
            }
        }
        if(boatPositionX >= 45 && boatPositionX <= 90){
            if(boatPositionY <= 80){
                setBoatPositionY(boatPositionY + boatSpeed);
            }
            if(boatPositionY <= 530 && boatPositionY >= 100){
                setBoatPositionY(boatPositionY + boatSpeed);
            }
        }
    }
    const moveUp = () => {
        if((boatPositionX >= 455 && boatPositionX <= 600)){
            if(boatPositionY >= 45){
                setBoatPositionY(boatPositionY - boatSpeed);
            }
        }
        if(boatPositionX >= 160 && boatPositionX <= 455){
            if(boatPositionY >= 45 && boatPositionY <= 110){
                setBoatPositionY(boatPositionY - boatSpeed);
            }
            if(boatPositionY >= 268 && boatPositionY <= 400){
                setBoatPositionY(boatPositionY - boatSpeed);
            }
            if(boatPositionY >= 490){
                setBoatPositionY(boatPositionY - boatSpeed);
            }
        }
        if((boatPositionX >= 120 && boatPositionX <= 160)){
            if(boatPositionY >= 10 && boatPositionY <= 350)setBoatPositionY(boatPositionY - boatSpeed);
            
            if(boatPositionY >= 490 && boatPositionY <= 600){
                setBoatPositionY(boatPositionY - boatSpeed);
            }
        }
        if((boatPositionX >= 90 && boatPositionX <= 120)){
            if(boatPositionY >= 10 && boatPositionY <= 350){
                setBoatPositionY(boatPositionY - boatSpeed);
            }
            if(boatPositionY >= 490 && boatPositionY <= 600){
                setBoatPositionY(boatPositionY - boatSpeed);
            }
        }
        if(boatPositionX >= 45 && boatPositionX <= 90){
            if(boatPositionY >= 45 && boatPositionY <= 150){
                setBoatPositionY(boatPositionY - boatSpeed);
            }
            if(boatPositionY >= 270){
                setBoatPositionY(boatPositionY - boatSpeed);
            }
        }
    }

    window.onkeydown = function(e){
        if(e.code === 'ArrowRight'){
            e.preventDefault();
            moveRight();
        }
        if(e.code === 'ArrowLeft'){
            e.preventDefault();
            moveLeft();
        }
        if(e.code === 'ArrowDown'){
            e.preventDefault();
            moveDown();
        }
        if(e.code === 'ArrowUp'){
            e.preventDefault();
            moveUp();
        }
        checkIfNearFish();
    }

    return ( 
        <div className="game-water-container" style={{height: `${containerHeight}px`, width: `${containerWidth}px`, backgroundImage: `url(${mapImage})`, backgroundSize: `${containerWidth}px`, backgroundColor: `#171717`}}>
            <Thief  containerHeight={containerHeight} containerWidth={containerWidth} positionX={boatPositionX} positionY={boatPositionY} boatImage={boatImage}/>
            <Paintings containerHeight={containerHeight} containerWidth={containerWidth} positionX={treasurePositionX} positionY={treasurePositionY} addFishToCaughtFishList={addFishToCaughtFishList}/>
        </div>
     );
}
 
export default GameContainer;