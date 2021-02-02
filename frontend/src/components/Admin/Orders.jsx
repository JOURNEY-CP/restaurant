import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import '@material/react-list/dist/list.css';
import List, { ListItem, ListItemText } from '@material/react-list';
import { onGetOrderList } from '../../redux/actions/orders';

const axios = require('axios').default;
const dotenv = require('dotenv');

dotenv.config();

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        setTimeout(
            function () {
                // Start the timer
                this.setState({ render: true }); // After 1 second, set render to true
            }.bind(this),
            1000,
        );
        //  console.log(process.env.REACT_APP_BACKEND_HOST);
        const res = await axios.get(`http://localhost:4000/api/admin/order`);
        this.props.onGetOrderList(await res.data);
    }

    orderList = () => {
        console.log(this.props.orders);
        return this.props.orders ? (
            this.props.orders.map((order) => (
                <ListItem
                    key={order.id}
                    onClick={() => {
                        this.props.history.push(`/orders/${order.id}`);
                    }}
                >
                    <img src="images/recipe.jpg" alt="r" width="60" height="60" style={{ borderRadius: '100%' }} />
                    <ListItemText primaryText={order.name} secondaryText={order.mobile} />
                </ListItem>
            ))
        ) : (
            <div>no content</div>
        );
    };

    render() {
        return (
            <div>
                <List twoLine>
                    <this.orderList />
                </List>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        orders: state.order.list,
    };
};

const mapDispatchToProps = (dispatch) => ({
    onGetOrderList: (data) => dispatch(onGetOrderList(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
