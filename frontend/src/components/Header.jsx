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
        // console.log(browserHistory);
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
                                        // onClick={()=>{this.props.history&&this.props.history.push(`/cart`)}}
                                    />
                                </Link>

                                {/* <button class="btn-small recipe__btn recipe__btn recipe__btn--add" onClick={()=>console.log(this.props)}>
                            <svg class="search__icon">
                                <use href="/images/icons.svg#icon-shopping-cart"></use>
                            </svg>
                        </button> */}
                            </TopAppBarIcon>
                        </TopAppBarSection>
                    </TopAppBarRow>
                </TopAppBar>
            </div>
        );
    }
}

export default Header;
