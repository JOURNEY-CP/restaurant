import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="restaurant-footer">
                <p className="restaurant-footer-text">Developed with <span className="restaurant-footer-heart">&hearts;</span>by Team Journey</p>
            </div>
        );
    }
}

export default Footer;
