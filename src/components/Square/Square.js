import React from 'react';
import Button from 'antd/lib/button';
import './Square.css'

class Square extends React.Component {
    render() {
        return (
            <div className='grid'>
                <Button type='primary' className='square' onClick={this.props.onClick}>
                    {this.props.value}
                </Button>
            </div>
        );
    }
}

export default Square;