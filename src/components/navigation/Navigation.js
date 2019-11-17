import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navigation.css'

// @params {Object} image

class Navigation extends Component {
    render() {

        let { image } = this.props;

        return (
            <Navbar 
                id="navbar" 
                bg="dark" 
                variant="dark">
                <Navbar.Brand>
                    <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="logo"
                    />
                </Navbar.Brand>
                <Nav className="tabs">
                    <div className="nav-links">
                        <Nav.Link>Movies</Nav.Link>
                        <Nav.Link>TV Shows</Nav.Link>
                    </div>
                    <div className="nav-links-mobile">
                        <img 
                            className="hamburger-icon"
                            src={require('../../../static/hamburger.png')} 
                        />
                    </div>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation;