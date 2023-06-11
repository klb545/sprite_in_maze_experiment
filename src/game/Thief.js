import thief_sprite_right from '../images/thief_sprite_right.png';
import thief_sprite_left from '../images/thief_sprite_left.png';
import thief_sprite_front from '../images/thief_sprite_front.png';
import thief_sprite_back from '../images/thief_sprite_back.png';

const Thief = ({containerHeight, containerWidth, thiefPositionX, thiefPositionY, thiefImage}) => {
    
    return ( 
        <div
            className="sprite thief-sprite"
            style={{
                height: "70px",
                width: "70px",
                display: "flex",
                position: "absolute",
                left: `${thiefPositionX}px`,
                top: `${thiefPositionY}px`,
                }}
        >
            
            {thiefImage === "heading right" ? <img src={thief_sprite_right} style={{"-webkit-filter":"drop-shadow(5px 5px 5px #222)", filter: "drop-shadow(5px 5px 5px #222)"}}/> 
                : thiefImage === "heading left" ? <img src={thief_sprite_left} style={{"-webkit-filter":"drop-shadow(5px 5px 5px #222)", filter: "drop-shadow(5px 5px 5px #222)"}}/> 
                : thiefImage === "heading up" ? <img src={thief_sprite_back} style={{"-webkit-filter":"drop-shadow(5px 5px 5px #222)", filter: "drop-shadow(5px 5px 5px #222)"}}/> 
            : <img src={thief_sprite_front} style={{"-webkit-filter":"drop-shadow(5px 5px 5px #222)", filter: "drop-shadow(5px 5px 5px #222)"}}/>}
      

        </div>
     );
}
 
export default Thief;