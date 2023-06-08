import Painting from "./Painting";

const Paintings = ({containerHeight, containerWidth, positionX, positionY, displayMultipleChoiceQuestion}) => {
    return ( 
        <Painting containerHeight={containerHeight} containerWidth={containerWidth} positionX={positionX} positionY={positionY} displayMultipleChoiceQuestion={displayMultipleChoiceQuestion}/>
     );
}
 
export default Paintings;