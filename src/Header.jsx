export default Header;
import Pokeball from "./assets/images/pokeball.png";

function Header({picArr,score,bestScore}){
    return (
        <div className="header">
        <h1 className="header-title">
            <button className="title">
                <img src={Pokeball} alt="" className="header-img" />
                <h1 className="title">Memo<span className="fc-white">Dex</span></h1>
            </button>
        </h1>
        <div className="stats">
            <p className="current-score">Score: {`${score}/${picArr.length}`}</p>
            <p className="best-score">Best Score: {bestScore}</p>
        </div>
        </div>
    )
}

