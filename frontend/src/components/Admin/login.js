import React, { Component } from 'react';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-button/dist/button.css';
import Button from '@material/react-button';

import connect from 'react-redux/es/connect/connect';
import {onLogin} from '../../redux/actions/auth';
class login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             password:""
        }
    }
    
    render() {
        return (
            <div>
            <TextField
                label='Password'
                onTrailingIconSelect={() => this.setState({value: ''})}
                leadingIcon={<MaterialIcon icon="account_circle"/>}
            >
                <Input
                    id="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({name: e.currentTarget.value})} 
                />
            </TextField>
            <Button 
                    href='/admin'
                    icon={<MaterialIcon icon="restaurant"/>}
                    raised
                >
                    Start Ordering
                </Button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    onLogin: () => dispatch(onLogin()),
});
export default connect(null, mapDispatchToProps)(login);