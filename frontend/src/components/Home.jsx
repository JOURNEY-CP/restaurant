import React, { Component } from 'react'
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-button/dist/button.css';
import Button from '@material/react-button';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            tableNo:'',
            mobile:'',
        };
    }

    render() {
        return (
            <div>
            <br/>
                <TextField
                    label='Name'
                    onTrailingIconSelect={() => this.setState({value: ''})}
                    leadingIcon={<MaterialIcon icon="account_circle"/>}
                >
                    <Input
                        id="name"
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.currentTarget.value})} 
                    />
                </TextField>
                <br/>
                <br/>
                <TextField
                    label='Mobile Number'
                    onTrailingIconSelect={() => this.setState({value: ''})}
                    leadingIcon={<MaterialIcon icon="call"/>}
                >
                    <Input
                        id="mobile"
                        value={this.state.mobile}
                        onChange={(e) => this.setState({mobile: e.currentTarget.value})} 
                    />
                </TextField>
                <br/>
                <br/>
                <TextField
                    label='Table Number'
                    id="table"
                    leadingIcon={<MaterialIcon icon="restaurant_menu"/>}
                >
                    <Input
                        value={this.state.tableNo}
                        onChange={(e) => this.setState({tableNo: e.currentTarget.value})} 
                    />
                </TextField>
                <br/>
                <br/>
                
                <Button 
                    href="/items"
                    icon={<MaterialIcon icon="restaurant"/>}
                    raised
                >
                    Start Ordering
                </Button>
            </div>
        )
    }
}

export default Home;
