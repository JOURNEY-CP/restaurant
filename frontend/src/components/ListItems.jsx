import React, { Component} from 'react'
import connect from 'react-redux/es/connect/connect';
import {onGetItemList} from '../redux/actions/items';
import './ListItem.css';
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
      //console.log(process.env.REACT_APP_BACKEND_HOST);
       const res =await axios.get(`${process.env.REACT_APP_BACKEND_HOST}/api/user/item`)
       this.props.onGetItemList(await res.data)
    }
    itemList = () =>(
        this.props.items?(
                this.props.items.map((item)=>(
                    <div className="list-item-single" onClick={()=>{this.props.history.push(`/items/${item.id}`)}}>
                        <div className="list-item-single-image">
                            <img className="list-item-single-img" src="/images/recipe.jpg" alt="r"  />
                        </div>
                        <div className="list-item-single-details">
                            <div className="list-item-single-name">{item.name}</div>
                            <div className="list-item-single-name">{item.price}/-</div>
                        </div>
                    </div>
                ))
            ):(<div/>)
    )
    render() {
        return (
                <div className="list-item">
                    <this.itemList/>
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
