import React, { Component, Suspense } from 'react'
import connect from 'react-redux/es/connect/connect';
import SampleItem from './SampleItem';
import Spinner from './Spinner';
import '@material/react-list/dist/list.css';
import MaterialIcon from '@material/react-material-icon';
import List, {ListItem, ListItemText} from '@material/react-list';
import { Button } from '@material/react-button';
import {onGetItemList} from '../redux/actions/items';
const axios=require('axios').default;
const dotenv = require('dotenv');
dotenv.config();
class ItemsList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
  
    async componentDidMount(){
        setTimeout(function() { //Start the timer
         this.setState({render:true})//After 1 second, set render to true
     }.bind(this), 1000)
     console.log(process.env.REACT_APP_BACKEND_HOST);
     //this.setState({loading:true})
       const res =await axios.get(`http://localhost:4000/api/user/item`)
       this.props.onGetItemList(await res.data)
    }
    itemList = () =>(
        this.props.items?(
                this.props.items.map((item)=>(
                <ListItem key={item.id} onClick={()=>{this.props.history.push(`/items/${item.id}`)}}>
                    <img src="images/recipe.jpg" alt="r" width="60" height="60" style= {{borderRadius:"100%"}}/>
                    <ListItemText
                        primaryText={item.name}
                        secondaryText={item.price} />
                </ListItem>
                ))
            ):(<div/>)
    )
    render() {
        const loading=this.state.loading
        return (
                <div>
                    <List twoLine>
                        <this.itemList/>
                    </List>
                </div>  
        )
    }
}
const mapStateToProps = state => {
    return {
        items: state.items.list,
    };
};

const mapDispatchToProps = dispatch => ({
    onGetItemList: data => dispatch(onGetItemList(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
