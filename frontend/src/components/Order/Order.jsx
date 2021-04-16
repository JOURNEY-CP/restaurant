import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import { onGetCustomerMetaData } from '../../redux/actions/metaData';
import MyButton from '../Util/MyButton';
import './order.css';

const axios = require('axios').default;

class Order extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            tableNo: '',
            name: '',
            mobile:'',
        }
    }
    
    componentDidMount() {
        const { customerMetaData } = this.props;
        console.log(customerMetaData);
        this.setState({...customerMetaData});
    }

    placeOrder = () => {
        const { tableNo, name, mobile } = this.state;
        this.props.onGetCustomerMetaData({ tableNo, name, mobile });
        axios
            .post(`${process.env.REACT_APP_BACKEND_HOST}/api/user/order`, {
                customer_mobile: mobile,
                customer_name: name,
                table_no: tableNo,
                item_list: this.props.order,
            })
            .then(function(response) {
                alert('Thanks for Ordering!!');
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    onChange = event  => {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        return (
            <div>
                <TextField id="tableNo" onChange={this.onChange} value={this.state.tableNo} label="Table No" />
                <br/><br/>
                <TextField id="name" onChange={this.onChange} value={this.state.name} label="Name" />
                <br/><br/>
                <TextField id="mobile" onChange={this.onChange} value={this.state.mobile} label="Mobile" />
                <br /><br />
                <MyButton onClick={this.placeOrder} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        customerMetaData: state.metaData.customerMetaData,
        order: state.cart.order,
    };
};

const mapDispatchToProps = dispatch => ({
    onGetCustomerMetaData: data => dispatch(onGetCustomerMetaData(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Order);
