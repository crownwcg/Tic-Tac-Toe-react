import React from 'react';
import Board from '../Board/Board';
import Header from '../Navigation/Header'
import { Button } from 'antd';
import './Game.css'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // record history
            history: [
                {
                    squares : Array(9).fill(null)
                }
            ],
            // history step number
            stepNumber: 0,
            // is player 'X' next player
            isXNext: true,
        }
    }

    // check either player has won the game
    hasWin(squares) {
        // state number that some player might win
        // 0   1   2
        // 3   4   5
        // 6   7   8
        const lines = [
            [0, 1, 2],  // row
            [3, 4, 5],  // row
            [6, 7, 8],  // row
            [0, 3, 6],  // column
            [1, 4, 7],  // column
            [2, 5, 8],  // column
            [0, 4, 8],  // 
            [2, 4, 6],
        ];

        // check for every situation
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && 
                squares[a] === squares[b] &&
                squares[b] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    // handle square click event
    onClickChange(i) {
        // get history
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        // get current state
        const current = history[history.length - 1];
        // create new squares array
        const squares = current.squares.slice();

        // check there is a winner or the square has been occupied
        if (this.hasWin(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.isXNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            isXNext: !this.state.isXNext,
        });
    }

    // jump to history state
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            isXNext: (step % 2) === 0,
        });
    }

    render() {
        // get history
        const history = this.state.history;
        // get current state
        const current = history[this.state.stepNumber];
        // check if there is a winner
        const winner = this.hasWin(current.squares);

        // show history
        const moves = history.map((step, move) => {
            if (move) {
                const dest = 'Go To Move ' + move;
                return (
                    <li key={move} className='moves link dim f5 f4-ns dib mr3'>
                        <Button 
                            className='button moves' 
                            onClick={() => this.jumpTo(move)}>
                            {dest}
                        </Button>
                    </li>
                );
            }
            return null;
        })

        // change state if there is a winner
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next Player: ' + (this.state.isXNext ? 'X' : 'O');
        }

        return (
            <div className='game'>
                <Header value={status}/>
                <div className='game-board shadow-5'>
                    <Board 
                        squares={current.squares}
                        onClick={i => this.onClickChange(i)}/>
                </div>
                <div className='game-info'>
                    <div>{moves}</div>
                </div>
                <div className='ph3 mt4'>
                    <Button
                        className='button restart f6 grow no-underline br-pill ba ph3 dib mb2 dim center'
                        onClick={() => {
                            this.setState({
                                history: [
                                    {
                                        squares : Array(9).fill(null)
                                    }
                                ],
                                stepNumber: 0,
                                isXNext: true,
                            })
                        }}>
                        RESTART
                    </Button>
                </div>
            </div>
        );
    }
}

export default Game;