import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect';
import {onAddItemToCart} from '../../redux/actions/cart';
import './Item.css';
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
            <div className="item">
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
                            <button className="item-btn-inc-dec"  onClick={()=>{this.handleServings(-1)}}>
                                <svg>
                                    <use href="/images/icons.svg#icon-circle-with-minus"></use>
                                </svg>
                            </button>
                            <button className="item-btn-inc-dec"  onClick={()=>{this.handleServings(1)}}>
                                <svg>
                                    <use href="/images/icons.svg#icon-circle-with-plus"></use>
                                </svg>
                            </button>
                        </div>
                        <div classsName="item-details-cart-button">
                            <button className="item-btn-cart" onClick={()=>this.props.onAddItemToCart(this.state)}>
                                <svg>
                                    <use href="/images/icons.svg#icon-shopping-cart"></use>
                                </svg>
                                {/* <span>Add to cart</span> */}
                            </button>
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
