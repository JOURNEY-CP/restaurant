import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect';
import {onUpdateItemQuantity} from '../redux/actions/cart';
import { Link } from 'react-router-dom';
import './Cart.css';
const axios=require('axios').default;
class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
        }
        
    }

    placeOrder = () =>{
        if(this.props.customerMetaData){
            axios.post(`http://localhost:4000/api/user/order`,{
                customer_mobile:this.props.customerMetaData.mobile,
                customer_name:this.props.customerMetaData.name,
                table_no:this.props.customerMetaData.tableNo,
                item_list:this.props.order
            })
            .then(function(response){
                console.log(response);
                alert("Thanks for Ordering!!")
            })
            .catch(function(error){
                console.log(error);
            });
        }else{
            alert("something went wrong!");
        }
       
    }
    handleServings= (id,val) =>{
        //console.log(this.props.order);
        this.props.onUpdateItemQuantity({"id":id,"val":val})
    }
    addToCart = () =>(
        this.props.order?(
            this.props.order.map((item)=>(
                <div className="cart-item"  key={item.id}>
                    <div className="cart-item-figure"> 
                    <Link to={`/items/${item.id}`}>
                        <img 
                            src="images/recipe.jpg" 
                            alt="r" 
                            width="60" 
                            height="60" 
                            style= {{borderRadius:"100%"}}
                        />
                    </Link> 
                    </div>
                    <div className="cart-item-middle">
                        <div className="cart-item-middle-name">
                            {item.name}
                        </div>
                        <div className="cart-item-middle-quantity">
                            <div>
                                <svg className="cart-item-servings-icon">
                                    <use href="/images/icons.svg#icon-man"></use>
                                </svg>
                            </div>
                            <div className="cart-item-servings-data">
                                <span className="cart-item-servings-count">{item.quantity}</span>
                                <span className="cart-item-servings-text"> SERVINGS</span>
                            </div>
                            <div className="cart-item-servings-inc-dec-buttons">
                                <button className="btn-tiny btn-decrease"  onClick={()=>this.handleServings(item.id,-1)}>
                                <svg>
                                    <use href="/images/icons.svg#icon-circle-with-minus"></use>
                                </svg>
                                </button>
                                <button className="btn-tiny btn-increase"  onClick={()=>this.handleServings(item.id,1)}>
                                    <svg>
                                        <use href="/images/icons.svg#icon-circle-with-plus"></use>
                                    </svg>
                                </button>
                            </div>  
                        </div>
                    </div>
                    <div className="cart-item-price">
                        <h3>{item.price*item.quantity}/-</h3>
                    </div>
                </div>
           
            ))
        ):(<div/>)
    )
    render() {
        console.log(this.props.customerMetaData);
        return (
            <div className="cart"> 
                <h1>Cart</h1> 
                <h3>{this.props.order.length} items in Cart</h3>
                <this.addToCart/>
                <div className="cart-place-order">
                    <button onClick={this.placeOrder}>PlaceOrder</button>
                </div>
            </div>
        
        )
    }
}
const mapStateToProps = state => {
    return {
        order: state.cart.order,
        customerMetaData:state.metaData.customerMetaData,
    };
};
const mapDispatchToProps = dispatch => ({
    onUpdateItemQuantity: data => dispatch(onUpdateItemQuantity(data)),
  });
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
