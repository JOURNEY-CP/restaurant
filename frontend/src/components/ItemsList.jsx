import React, { Component } from 'react'
import '@material/react-list/dist/list.css';
import MaterialIcon from '@material/react-material-icon';
import List, {ListItem, ListItemText} from '@material/react-list';
import SampleItem from './SampleItem';
import { Button } from '@material/react-button';
const axios=require('axios').default;
const dotenv = require('dotenv');
dotenv.config();
class ItemsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
             items:[]
        }
    }
  
    async componentDidMount(){
        setTimeout(function() { //Start the timer
         this.setState({render: true}) //After 1 second, set render to true
     }.bind(this), 1000)
     console.log(process.env.REACT_APP_BACKEND_HOST);
       const res =await axios.get(`http://localhost:4000/api/user/item`)
       this.state.items=await res.data;
       console.log(this.state.items);
     }
     itemList = () =>(
        this.state.items.map((item)=>(
            <ListItem key={item.id} onClick={()=>{this.props.history.push(`/items/${item.id}`)}}>
                <img src="images/recipe.jpg" alt="r" width="60" height="60" style= {{borderRadius:"100%"}}/>
                <ListItemText
                    primaryText={item.name}
                    secondaryText={item.price} />
            </ListItem>
        ))
     )
    render() {
        return (
            <div>
                 <List twoLine>
                   <this.itemList/>
                </List>
            </div>
        )
    }
}

export default ItemsList
