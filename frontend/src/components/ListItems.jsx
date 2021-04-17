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
       const res =await axios.get(`${process.env.REACT_APP_BACKEND_HOST}/api/user/item`)
       this.props.onGetItemList(await res.data)
    }

    render() {
        const { items } = this.props;
        return (
                <div className="list-item">
                {
                    items ? (
                        items.map(item=>(
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
                    ) : (<div />)
                }
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
