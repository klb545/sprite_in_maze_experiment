import Painting from "./Painting";

const Paintings = ({containerHeight, containerWidth, positionX, positionY, addFishToCaughtFishList}) => {
    return ( 
        <Painting containerHeight={containerHeight} containerWidth={containerWidth} positionX={positionX} positionY={positionY} addFishToCaughtFishList={addFishToCaughtFishList}/>
     );
}
 
export default Paintings;