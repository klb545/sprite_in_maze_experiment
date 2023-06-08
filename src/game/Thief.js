import blob2 from '../images/blob2.png';

const Thief = ({containerHeight, containerWidth, positionX, positionY, boatImage}) => {
    return ( 
        <div
            className="sprite boat-sprite"
            style={{
                height: "60px",
                width: "60px",
                display: "flex",
                position: "absolute",
                left: `${positionX}px`,
                top: `${positionY}px`,
                }}
        >
            <img src={blob2}/>

        </div>
     );
}
 
export default Thief;