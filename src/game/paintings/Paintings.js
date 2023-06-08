import Painting from "./Painting";

const Paintings = ({containerHeight, containerWidth, paintingPositionX, paintingPositionY, displayMultipleChoiceQuestion}) => {
    return ( 
        <Painting containerHeight={containerHeight} containerWidth={containerWidth} paintingPositionX={paintingPositionX} paintingPositionY={paintingPositionY} displayMultipleChoiceQuestion={displayMultipleChoiceQuestion}/>
     );
}
 
export default Paintings;