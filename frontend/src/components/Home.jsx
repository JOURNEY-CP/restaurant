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
                    helperText={<HelperText>Enter Your Full Name</HelperText>}
                    onTrailingIconSelect={() => this.setState({value: ''})}
                    leadingIcon={<MaterialIcon icon="account_circle"/>}
                >
                    <Input
                        id="name"
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.currentTarget.value})} 
                    />
                </TextField>
                <TextField
                    label='Mobile Number'
                    helperText={<HelperText>Enter Your Mobile Number</HelperText>}
                    onTrailingIconSelect={() => this.setState({value: ''})}
                    leadingIcon={<MaterialIcon icon="call"/>}
                >
                    <Input
                        id="mobile"
                        value={this.state.mobile}
                        onChange={(e) => this.setState({mobile: e.currentTarget.value})} 
                    />
                </TextField>
                <TextField
                    label='Table Number'
                    id="table"
                    helperText={<HelperText>Enter Table Number</HelperText>}
                    leadingIcon={<MaterialIcon icon="restaurant_menu"/>}
                >
                    <Input
                        value={this.state.tableNo}
                        onChange={(e) => this.setState({tableNo: e.currentTarget.value})} 
                    />
                </TextField>
                <Button
                    icon={<MaterialIcon icon="restaurant"/>}
                    onClick={()=>{alert(this.state.name+this.state.tableNo)}}
                    raised
                >
                    Start Ordering
                </Button>
            </div>
        )
    }
}

export default Home;
