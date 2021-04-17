import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import { Link } from 'react-router-dom';
import { onUpdateItemQuantity } from '../redux/actions/cart';
import './Cart.css';
import './globalStyle.css';
import MyButton from './Util/MyButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Servings from './Items/Servings';
const dotenv = require('dotenv');

dotenv.config();
class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    placeOrder = () => {
        this.props.history.push("/order");
    }
    handleServings= (id,val) =>{
        //console.log(this.props.order);
        this.props.onUpdateItemQuantity({"id":id,"val":val})
    }
    addToCart = () =>(
        this.props.order?(
            this.props.order.map((item)=>(
                <div className="cart-item"  id="item-single" key={item.id}>
                    <div className="cart-item-figure"> 
                    <Link to={`/items/${item.id}`}>
                        <img 
                            src="/images/recipe.jpg" 
                            alt="r" 
                            width="60" 
                            height="60" 
                            style= {{borderRadius:"100%"}}
                        />
                    </Link> 
                    </div>
                    <div className="cart-item-middle">
                        <div className="cart-item-middle-name">{item.name}</div>
                        <div className="cart-item-middle-quantity">
                            <Servings quantity={item.quantity} onClick={quantity => this.props.onUpdateItemQuantity({ "id": item.id, "val": quantity }) } />
                        </div> 
                    </div>
                    <div className="cart-item-price">
                        <h3>{item.price * item.quantity}/-</h3>
                    </div>
                </div>
            ))
        ) : (
            <div />
        )
    )
    

    render() {
        return (
            <div className="cart">
                <h1>Cart</h1>
                <h3>{this.props.order.length} items in Cart</h3>
                <this.addToCart />
                <div className="cart-place-order">
                    <Link to="/items"><MyButton icon={<MenuBookIcon/>} data="View All Items"/></Link>
                    <MyButton icon={<ArrowForwardIcon/>} onClick={this.placeOrder} data="Proceed to Checkout"/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        order: state.cart.order,
        customerMetaData: state.metaData.customerMetaData,
    };
};
const mapDispatchToProps = dispatch => ({
    onUpdateItemQuantity: data => dispatch(onUpdateItemQuantity(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
