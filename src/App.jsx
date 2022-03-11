import React, {useState} from "react";
import Board from "./components/Board";
import "./styles/root.scss"
import calculateWinner from "./helpers";

export default () =>
{
    const [board, setBoard]= useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(false)
    const winner = calculateWinner(board)
    const message = winner ? `Winner: ${winner}`: ""

    const squareClickHandler = (position) =>{
        if(board[position]) return
        setBoard( prevState => {
            return prevState.map((square, pos) => {
                if(pos === position){
                    return isXNext ? 'X' : 'O'
                }
                return square
            })
        })
        setIsXNext( prevState => !prevState )
    }
    return (
        <div className={"app"}>
            <h1>TIC TAC TOE!</h1>
            <h2> {message} </h2>
            <Board board={board} squareClickHandler={squareClickHandler }/>
        </div>
    );
}
