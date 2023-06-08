import paintingSprite from '../../images/PaintingSprite.png'
const Painting = ({containerHeight, containerWidth, positionX, positionY, addFishToCaughtFishList}) => {

    const black = <div className="pixel black-pixel"></div>
    const yellow = <div className="pixel duck-yellow-pixel"></div>
    const orange = <div className="pixel brown-pixel" style={{backgroundColor: "brown"}}></div>
    const transparent = <div className="pixel"></div>
    
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
















