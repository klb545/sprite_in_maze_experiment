import GameContainer from "../game/GameContainer";
import { useState, useEffect } from "react";
import StolenArtList from "../game/stolenart/StolenArtList";

const MainContainer = () => {

    const [allFishData, setAllFishData] = useState([]);
    const [allCommonFish, setAllCommonFish] = useState(null);
    const [allUncommonFish, setAllUncommonFish] = useState(null);
    const [allRareFish, setAllRareFish] = useState(null);
    const [allUltrarareFish, setAllUltrarareFish] = useState(null);

    const [randomFishList, setRandomFishList] = useState([]);

    const [caughtFishList, setCaughtFishList] = useState([]);

    const [allArtData, setAllArtData] = useState([]);
    const [randomArtWork1, setRandomArtwork1] = useState(null);
    const [randomArtWork2, setRandomArtwork2] = useState(null);
    const [randomArtWork3, setRandomArtwork3] = useState(null);

    const [gameContainerWidth, setGameContainerWidth] = useState(600);
    const [gameContainerHeight, setGameContainerHeight] = useState(600);

    const [treasurePositionX, setTreasurePositionX] = useState(70);
    const [treasurePositionY, setTreasurePositionY] = useState(285);

    const [wallet, setWallet] = useState(0);

    

    const fetchAllFishData = async () => {
        const response = await fetch(`https://acnhapi.com/v1/fish/`);
        const fishJsonData = await response.json();
        const fishJsonDataArray = Object.values(fishJsonData);
        setAllFishData(fishJsonDataArray);
    }

    useEffect( () => {
        fetchAllFishData();
    }, [])   
    

    const addFishToCaughtFishList = () => {
        const randomFish = randomFishList[Math.floor(Math.random()*randomFishList.length)];
        if(!caughtFishList.some(fish => fish.id === randomFish.id)){
            setCaughtFishList([...caughtFishList, randomFish]);
        } else {
            // increase quantity in td
            const fishQuantity = document.querySelector(`#quantity_of_${randomFish.id}`);
            fishQuantity.innerText = parseInt(fishQuantity.innerText) + 1;
        }
        // displayMessage();
        // moveTreasure();
    }


    useEffect( () => {
        if(allFishData !== null) {
            setAllCommonFish(allFishData.filter( fishObject => fishObject.availability.rarity === "Common" ));
            setAllUncommonFish(allFishData.filter( fishObject => fishObject.availability.rarity === "Uncommon" ));
            setAllRareFish(allFishData.filter( fishObject => fishObject.availability.rarity === "Rare" ));
            setAllUltrarareFish(allFishData.filter( fishObject => fishObject.availability.rarity === "Ultra-rare" ));
            setRandomFishList(allFishData.concat(allCommonFish).concat(allCommonFish).concat(allCommonFish).concat(allUncommonFish).concat(allUncommonFish).concat(allRareFish));
        }
    }, [allFishData])

    const increaseWallet = (priceOfFish) => {
        setWallet(Math.round(wallet + priceOfFish));
    }

    const removeFromCaughtFishList = (fishObject) => {
        setCaughtFishList(caughtFishList.filter(fishInList => fishInList != fishObject));
    }

    return ( 
        <>
            <GameContainer containerWidth={gameContainerWidth} containerHeight={gameContainerHeight} addFishToCaughtFishList={addFishToCaughtFishList} treasurePositionX={treasurePositionX} treasurePositionY={treasurePositionY}/>
            <StolenArtList caughtFishList={caughtFishList} wallet={wallet} increaseWallet={increaseWallet} removeFromCaughtFishList={removeFromCaughtFishList}/>
        </>
     );
}
 
export default MainContainer;














