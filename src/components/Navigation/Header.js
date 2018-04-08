import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className='status'>
                <h1>{this.props.value}</h1>
            </div>
        );
    }
}

export default Header;