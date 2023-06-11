import StolenArt from "./StolenArt";

const StolenArtList = ({caughtFishList, wallet, increaseWallet, removeFromCaughtFishList}) => {

    return ( 
        <div className="caught-fish">
            <h2>Stolen Art</h2>
            <h3>Total value:</h3>
            <ul>
                <li>list item</li>
            </ul>
            {/* <table className="table">
                <tbody>
                    <tr>
                        <td style={{color: "#39FF14"}}><strong>Click to Sell</strong></td>
                        <td><strong>Name</strong></td>
                        <td><strong>Value</strong></td>
                    </tr>
                </tbody>
            </table> */}
        </div>
     );
}
 
export default StolenArtList;