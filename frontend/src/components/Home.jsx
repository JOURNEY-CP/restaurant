import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect';
import {onGetCustomerMetaData} from '../redux/actions/metaData';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-button/dist/button.css';
import Button from '@material/react-button';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            tableNo:'',
            mobile:'',
        };
    }
    handleMetaData = ()=>{
        this.props.onGetCustomerMetaData(this.state);
        this.props.history.push("/items");
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
                    icon={<MaterialIcon icon="restaurant"/>}
                    raised
                    onClick={this.handleMetaData}
                >
                    Start Ordering
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        customerMetaData: state.metaData.customerMetaData,
    };
};

const mapDispatchToProps = dispatch => ({
    onGetCustomerMetaData: data => dispatch(onGetCustomerMetaData(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
