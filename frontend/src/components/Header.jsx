import React, { Component } from 'react';

import TopAppBar, { TopAppBarIcon, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handlePath = () => {
        this.props.history.push(`/cart`);
    };

    render() {
        return (
            <div>
                <TopAppBar>
                    <TopAppBarRow>
                        <TopAppBarSection align="start">
                            <TopAppBarIcon navIcon tabIndex={0}>
                                <MaterialIcon hasRipple icon="menu" onClick={() => console.log('click')} />
                            </TopAppBarIcon>
                            <TopAppBarTitle>Restaurent</TopAppBarTitle>
                        </TopAppBarSection>
                        <TopAppBarSection align="end" role="toolbar">
                            <TopAppBarIcon actionItem tabIndex={0}>
                                <Link to="/cart">
                                    <MaterialIcon
                                        aria-label="print page"
                                        hasRipple
                                        icon="shopping_cart"
                                    />
                                </Link>
                            </TopAppBarIcon>
                        </TopAppBarSection>
                    </TopAppBarRow>
                </TopAppBar>
            </div>
        );
    }
}

export default Header;
