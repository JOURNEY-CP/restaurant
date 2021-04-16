import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect';
import {onAddItemToCart} from '../../redux/actions/cart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import IconButton from '@material-ui/core/IconButton'
import './Item.css';
import '../globalStyle.css'
import MyButton from '../Util/MyButton';
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
    handleServings = val =>{
        const servings=this.state.quantity+val;
        if(servings>=1)
        this.setState({quantity:servings});
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
                <MyButton icon={<MenuBookIcon/>} onClick={()=>this.goToItemsPage} data="View all Items"/>
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
                        <div className="item-details-inc-dec-cart-buttons">
                            <div className="item-details-inc-dec-buttons">
                                <svg className="item-icon-man">
                                    <use href="/images/icons.svg#icon-man"></use>
                                </svg>
                                <span className="item-details-servings">{this.state.quantity} SERVINGS</span>
                                <div className="item-inc-dec-buttons">
                                    <IconButton color="primary" onClick={()=>this.handleServings(-1)}>
                                        <RemoveCircleIcon/>
                                    </IconButton>
                                    <IconButton color="primary" onClick={()=>this.handleServings(1)}>
                                        <AddCircleIcon/>
                                    </IconButton>
                                </div>
                            </div>
                            <div className="item-btn-addtocart" >
                                <MyButton icon={<AddShoppingCartIcon/>} onClick={()=>this.props.onAddItemToCart(this.state)} data="Add to Cart"/>
                            </div>
                            {/* <button className="item-btn-cart" onClick={()=>this.props.onAddItemToCart(this.state)}>
                                <AddShoppingCartIcon className="item-btn-addtocart"/>
                                {/* <span>Add to cart</span> 
                            </button> */}
                        
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
