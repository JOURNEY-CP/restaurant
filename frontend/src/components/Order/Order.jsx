import React, { Component } from 'react'
import './order.css';
const axios = require('axios').default;

class Order extends Component {

    placeOrder = () => {
        if (this.props.customerMetaData) {
            axios
                .post(`${process.env.REACT_APP_BACKEND_HOST}/api/user/order`, {
                    customer_mobile: this.props.customerMetaData.mobile,
                    customer_name: this.props.customerMetaData.name,
                    table_no: this.props.customerMetaData.tableNo,
                    item_list: this.props.order,
                })
                .then(function(response) {

                    alert('Thanks for Ordering!!');
                })
                .catch(function(error) {
                    console.log(error);
                });
        } else {
            alert('something went wrong!');
        }
       
    }
    render() {
        return (
            <div>
                Order in Progress
            </div>
        )
    }
}
export default Order;
