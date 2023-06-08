const Painting = ({containerHeight, containerWidth, positionX, positionY, addFishToCaughtFishList}) => {

    const black = <div className="pixel black-pixel"></div>
    const yellow = <div className="pixel duck-yellow-pixel"></div>
    const orange = <div className="pixel brown-pixel" style={{backgroundColor: "brown"}}></div>
    const transparent = <div className="pixel"></div>
    
    return ( 
        <div className='sprite' 
        style={{
        height: "55px", 
        width: "60px", 
        display: "flex", 
        position: "absolute",
        left: `${positionX}px`,
        top: `${positionY}px`,
    }}>
        <div>{black}{black}{black}{black}{black}{black}{black}</div>
        <div>{black}{orange}{orange}{black}{orange}{orange}{black}</div>
        <div>{black}{orange}{orange}{black}{orange}{orange}{black}</div>
        <div>{black}{orange}{orange}{yellow}{yellow}{orange}{black}</div>
        <div>{black}{orange}{yellow}{black}{yellow}{orange}{black}</div>
        <div>{black}{orange}{orange}{yellow}{yellow}{orange}{black}</div>
        <div>{black}{orange}{orange}{black}{orange}{orange}{black}</div>
        <div>{black}{orange}{orange}{black}{orange}{orange}{black}</div>
        <div>{black}{black}{black}{black}{black}{black}{black}</div>
    </div> 
     );
}
 
export default Painting;