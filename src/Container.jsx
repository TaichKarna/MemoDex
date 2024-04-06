import Card from "./Card";
import { useState } from "react";
export default Container;

function Container({cardDetails,score,setScore,bestScore,setBestScore}){
    const [shuffle,setShuffle] = useState(false);
    const [clickedArr,setClickedArr] = useState([]);

    const details = cardDetails;
    const cardsArr = details.map( ({name,front_default}) => {
        const index = Math.floor(Math.random() * details.length);
       return {name,front_default,index}
    })
    .sort( (pokemonOne,pokemonTwo) => pokemonOne.index - pokemonTwo.index);

    const gameHandler = (pokemonName) => {
        if(clickedArr.includes(pokemonName)){     
            setScore(0);
            setClickedArr([]);
        } else {
            setScore(score + 1);
        }

        if(bestScore < score){
            setBestScore(bestScore + 1);
        }   
    }

    return (
        <div className="container | ">
            {cardsArr.map((card) => 
                <Card imageSrc={card.front_default} pokemonName={card.name} 
                 setShuffle={setShuffle} shuffle={shuffle} 
                 clickedArr={clickedArr} setClickedArr={setClickedArr}
                 gameHandler={gameHandler}
                 key={card.name} onClick={gameHandler}/>
            )}
        </div>
    );
}

