import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect';
import List, {ListItem, ListItemText} from '@material/react-list';
class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    addToCart = () =>(
        this.props.order?(
            this.props.order.map((item)=>(
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
        console.log(this.props.order);
        return (
        <List twoLine>
           <this.addToCart/>
        </List>
        )
    }
}
const mapStateToProps = state => {
    return {
        order: state.cart.order,
    };
};
export default connect(mapStateToProps,null)(Cart);
