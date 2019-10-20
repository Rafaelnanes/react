import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">{this.props.brand}</a>
                    </div>
                    <div id="navbar">
                        <ul className="nav navbar-nav">
                            <li className={(this.props.currentPage === 'home') ? 'active' : ''}><a href="#">Home</a></li>
                            <li className={(this.props.currentPage === 'about') ? 'active' : ''}><a href="#">About</a></li>
                            <li className={(this.props.currentPage === 'contact') ? 'active' : ''}><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
