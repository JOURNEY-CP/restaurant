import React from 'react';
import { Route } from 'react-router-dom';

import connect from 'react-redux/es/connect/connect';
import Login from './Login';

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getComponet = (access, status) => {
        const { component, history, location } = this.props;
        // console.log(this.props);
        if (access === 'admin' && status) {
            return component;
        }
        return () => <Login history={history} prevLocation={location} />;
    };

    render() {
        const { rest, access, status } = this.props;
        return <Route {...rest} component={this.getComponet(access, status)} />;
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
    };
};

export default connect(mapStateToProps, null)(PrivateRoute);
