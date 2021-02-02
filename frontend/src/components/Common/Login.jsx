import React, { Component } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-button/dist/button.css';
import Button from '@material/react-button';

import connect from 'react-redux/es/connect/connect';
import { Redirect } from 'react-router-dom';
import { onLogin } from '../../redux/actions/auth';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
        };
    }

    handlePassword = () => {
        if (this.state.password === 'journey') {
            this.props.onLogin();
            const redirectPath =
                this.props &&
                this.props.prevLocation &&
                this.props.prevLocation.state &&
                this.props.prevLocation.state.from &&
                this.props.prevLocation.state.from.pathname;
            <Redirect to={redirectPath} />;
        } else {
            alert("Dont try to hack we are secure than your girl's mobile");
        }
    };

    render() {
        return (
            <div>
                <h2>If you are User Its not your place and you can leave</h2>
                <h2>Enter Password to access</h2>
                <TextField
                    label="Password"
                    onTrailingIconSelect={() => this.setState({ value: '' })}
                    leadingIcon={<MaterialIcon icon="account_circle" />}
                >
                    <Input
                        id="password"
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.currentTarget.value })}
                    />
                </TextField>
                <br />
                <br />
                <Button
                    onClick={this.handlePassword}
                    // icon={<MaterialIcon icon="restaurant"/>}
                    raised
                >
                    I am Really Admin
                </Button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLogin: () => dispatch(onLogin()),
});
export default connect(null, mapDispatchToProps)(Login);
