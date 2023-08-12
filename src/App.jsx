import Board from './components/Board'
import Score from './components/Score'
import { useState } from 'react'

import './app.css'
import ResetBoard from './components/ResetBoard'

function App() {

  const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [score, setScore] = useState({scoreX:0, scoreO:0})
  const [board, setBoard] = useState(Array(9).fill(null))
  const [playing, setPlaying] = useState("X")
  const [gameOver, setGameOver] = useState(false)

  const handleBoxClick = (boxIndex) => {
const newBoard = board.map((value, index) => {
  if(index === boxIndex) {
    return playing ? "X" : "O";
  } else {
    return value;
  }
})

const winner = checkWinner(newBoard)

if (winner) {
  if (winner === "O") {
    setScore({...score, scoreO: score.scoreO + 1})
  } else {
    setScore({...score, scoreX: score.scoreX + 1})
  }
}

setBoard(newBoard)
setPlaying(!playing)
  }

  const checkWinner = (board) => {
    for (let i = 0; i < winCondition.length; i++) {
      const [a, b, c] = winCondition[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]){
        setGameOver(true)
        return board[a]
      }}
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setPlaying("X")
    setGameOver(false)
  }

  return (
    <>
    <Score score={score} playing={playing} />
    <Board board={board} className='board' onClick={gameOver ? resetBoard : handleBoxClick}/>
    <ResetBoard resetBoard={resetBoard} />
    </>
  )
}

export default App
