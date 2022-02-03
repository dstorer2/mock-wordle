import './App.css';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Keyboard from './components/Keyboard/Keyboard';
import {useState} from 'react';
const checkWord = require('check-if-word');
const words = checkWord('en');

function App() {
  const [activeRow, setActiveRow] = useState(0);
  const [activeCell, setActiveCell] = useState(0);
  const [guess, setGuess] = useState("");
  const secretWord = "PIZZA"

  const [grid, setGrid] = useState([
    [{ value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }],
    [{ value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }],
    [{ value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }],
    [{ value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }],
    [{ value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }],
    [{ value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }, { value: "", class: "defaultCell" }],
  ])

  const handleKeyClick = event => {
    event.preventDefault();
    if(activeCell==5){
      return alert("Row is full")
    }
    setGrid([
      ...grid,
      grid[activeRow][activeCell].value = event.target.value,
      ...grid
    ])
    setActiveCell(activeCell+1);
    setGuess(guess+event.target.value);
  }

  //pick up here ################################################################################################################
  const handleEnter = event => {
    event.preventDefault();
    if(guess.length<5){
      return alert("Not enough letters!")
    }
    if(!words.check(guess)){
      return alert("Must guess a valid English word")
    }
    
    for(let i=0; i<5; i++){
      let currentCell = grid[activeRow][i];
      let newCellClass = null;
      if(secretWord.Contains(guess[i]) && secretWord[i]===currentCell.value){
        newCellClass = "correctPlace";
      }else if(secretWord.Contains(guess[i])){
        newCellClass = "correctLetter"
      }
      if(newCellClass != null){
        currentCell.class = newCellClass
      }
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Container className="Container" grid={grid}/>
      <Keyboard keyFunction={handleKeyClick}/>
    </div>
  );
}

export default App;
