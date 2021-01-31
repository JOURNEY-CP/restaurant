import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom';

import connect from 'react-redux/es/connect/connect';

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            component: this.props.Component, 
        } 
    }

    render(){
        const {rest,access}=this.props;
        return (
            <Route
                {...rest}
                render={(props) => access === 'admin' && this.props.status
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
            />
        )   
    }
};

const mapStateToProps = state => {
    return {
        status: state.auth.status,
    };
};

export default connect(mapStateToProps,null)(PrivateRoute);