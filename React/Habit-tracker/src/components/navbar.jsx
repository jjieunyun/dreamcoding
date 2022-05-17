import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        console.log('navbar')
        return (
            <nav className="navbar">
                <i className="navbar-logo fa-solid fa-pen-to-square"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;