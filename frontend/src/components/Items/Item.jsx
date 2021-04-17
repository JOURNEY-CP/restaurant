import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect';
import {onAddItemToCart} from '../../redux/actions/cart';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import './Item.css';
import '../globalStyle.css'
import MyButton from '../Util/MyButton';
import Servings from './Servings';
const dotenv = require('dotenv');
dotenv.config();
class Item extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:"",
            name:"",
            price:"",
            description:"",
            quantity:1
        }
        this.id = this.props.match.params.item_id;
    }
    goToItemsPage = () =>{
        this.props.history.push("/items");
    }
    componentDidMount(){
        const path = process.env.REACT_APP_BACKEND_HOST+"/api/user/item/"+this.id;
        fetch(path)
        .then(response => response.json())
        .then(data => {this.setState({...data,"quantity":1})})
        .catch(error => console.log(error));
    }
    render() {
        return (
            <div className="item-page">
                <MyButton icon={<MenuBookIcon/>} onClick={this.goToItemsPage} data="View all Items"/>
                <div className="item" id="item-single">
                    <div className="item-image">
                        <img 
                            className="item-img" 
                            src="/images/recipe.jpg"
                            alt={this.state.name}
                        />
                    </div>
                    <div className="item-details">
                        <div className="item-details-name">
                            {this.state.name}
                        </div>
                        <div className="item-details-price-value">
                            <div className="item-details-price">PRICE<b>&nbsp;&nbsp;</b></div>
                            <div className="item-details-value"><b>:&nbsp;&nbsp;</b>{this.state.price}</div>
                        </div>
                         <div className="item-servings-addtocart">
                            <Servings quantity={this.state.quantity} onClick={quantity => this.setState({ quantity })} />
                            <div className="item-btn-addtocart" >
                                <MyButton icon={<AddShoppingCartIcon/>} onClick={()=>this.props.onAddItemToCart(this.state)} data="Add to Cart"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.cart.order,
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    onAddItemToCart: data => dispatch(onAddItemToCart(data)),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Item);
