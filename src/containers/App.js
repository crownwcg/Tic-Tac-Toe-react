import React from 'react';
import Game from '../components/Game/Game';
import { Button } from 'antd';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGameBegin: 'false',
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.isGameBegin === 'false' ?
                    <div className='banner vh-100 dt w-100 tc white cover'>
                        <h1 className='f1 f-headline-l fw1 center'>TIC TAC TOE</h1>
                        <Button className='button start-game' onClick={() => {
                            this.setState({
                                isGameBegin: 'true',
                            });
                            console.log(this.state.isGameBegin)
                        }}>
                            <span>START GAME</span>
                        </Button>
                    </div> :
                    <Game />
                }
            </div>
        );
    }
}

export default App;