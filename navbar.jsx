import React, { Component } from 'react';
class NavBar extends React.Component {
    render() { 
        return <nav className="navbar">
            <a className="navbar-brand">NavBar <span>{this.props.totalCounters}</span>
            </a>
        </nav>;
    }
}
 
export default NavBar;