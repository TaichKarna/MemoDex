function Card({ imageSrc, pokemonName, setShuffle, shuffle, clickedArr, setClickedArr,gameHandler}) {
  const pokemonString = pokemonName;
  const firstLetterr = pokemonString.substring(0, 1);
  const nameOfPokemon = firstLetterr.toUpperCase() + pokemonString.substring(1);

  const clickHandle = () => {
    const arr = [...clickedArr,pokemonName]
    setShuffle(!shuffle);
    setClickedArr(arr);
    gameHandler(pokemonName);
  }

  return (
    <div className="card"  onClick={clickHandle}>
      <img className="card-image" src={imageSrc} ></img>
      <h3 className="card-name">{nameOfPokemon}</h3>
    </div>
  );
}

export default Card;
