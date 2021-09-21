import React, { Component } from 'react'
import MyButton from '../Util/MyButton';
import TextField from '@material-ui/core/TextField';
import RestaurantIcon from '@material-ui/icons/Restaurant';
const axios = require('axios').default;
class AddItems extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            price: '',
           description:'',
        }
    }
    addItem = () =>{
        const { name, price, description } = this.state;
        axios
            .post(`${process.env.REACT_APP_BACKEND_HOST}/api/admin/item`, {
               name,price,description
            })
            .then(function(response) {
                alert('Item added successfully!!');
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
            <div className="add-item">
                <TextField id="name" onChange={this.onChange} value={this.state.name} label="Item Name" />
                <br/><br/>
                <TextField id="price" onChange={this.onChange} value={this.state.price} label="Price" />
                <br/><br/>
                <TextField id="description" onChange={this.onChange} value={this.state.description} label="Description" />
                <br /><br />
                <MyButton icon={<RestaurantIcon/>} data="Add Item" onClick={this.addItem}/>
            </div>
        )
    }
}

export default AddItems;
