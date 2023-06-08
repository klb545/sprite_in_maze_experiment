import paintingSprite from '../../images/PaintingSprite.png'
const Painting = ({containerHeight, containerWidth, positionX, positionY, displayMultipleChoiceQuestion}) => {

    return ( 
        <div className='sprite' 
        style={{
        height: "40px", 
        width: "100px", 
        display: "flex", 
        position: "absolute",
        left: `${positionX}px`,
        top: `${positionY}px`,
        }}>
            <img src={paintingSprite} style={{width: "100px", height: "40px"}}/>
        </div> 
     );
}
 
export default Painting;
















