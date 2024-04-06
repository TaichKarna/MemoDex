import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Container from './Container';
import Header from './Header';


function App() {
  const [score,setScore] = useState(0);
  const [bestScore,setBestScore] = useState(0);
  const [picArr,setPicArr] = useState([]);

  useEffect(() => {
   async function getPic(id){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {mode: 'cors'});
      const pokeData = await response.json();
      const { name, sprites } = pokeData;
      const {front_default} = sprites;
      return new Promise((resolve) => resolve({name,front_default}));
   }

   async function getPicArray(numOfCards){
    const picArr = [];
    const randomNum = Math.floor(Math.random() * 500);
    let i = 0;

    while(i < numOfCards){
      const info = await getPic(randomNum + i * 2);
      picArr.push(info);  
      i = i + 1;
    }
    return new Promise((resolve) => resolve(picArr));
   }

   const setPic = async () => {
    const pics = await getPicArray(15);
    if(picArr.length === 0){
      setPicArr(pics);
    }
   }

   if(picArr.length === 0){
      setPic();
   }
  }
  ,[]);


  return (
    <div className='main'>
      <Header score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore} picArr={picArr}/>
      {
        picArr.length !== 0 ?    <Container cardDetails={picArr} score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}/> : ""
      }
    </div>
  )

}

export default App
