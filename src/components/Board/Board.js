import React from 'react';
import Square from '../Square/Square';
import { Row, Col } from 'antd';
import './Board.css';

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={this.props.squares[i]}
                        onClick={() => this.props.onClick(i)} />;
    }

    render() {
        return (
            <div className='container'>
                <Row type='flex'>
                    <Col>{this.renderSquare(0)}</Col>
                    <Col>{this.renderSquare(1)}</Col>
                    <Col>{this.renderSquare(2)}</Col>
                </Row>
                <Row type='flex'>
                    <Col>{this.renderSquare(3)}</Col>
                    <Col>{this.renderSquare(4)}</Col>
                    <Col>{this.renderSquare(5)}</Col>
                </Row>
                <Row type='flex'>
                    <Col>{this.renderSquare(6)}</Col>
                    <Col>{this.renderSquare(7)}</Col>
                    <Col>{this.renderSquare(8)}</Col>
                </Row>
            </div>
            );
    }
}

export default Board;