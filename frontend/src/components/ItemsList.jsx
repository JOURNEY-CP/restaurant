import React, { Component } from 'react'
import '@material/react-list/dist/list.css';
import MaterialIcon from '@material/react-material-icon';
import List, {ListItem, ListItemText} from '@material/react-list';
import SampleItem from './SampleItem';
import { Button } from '@material/react-button';

class ItemsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
  
   
    render() {
        return (
            <div>
                 <List twoLine>
                    <ListItem onClick={()=>{this.props.history.push('/items/1')}}>
                    <img src="images/recipe.jpg" alt="r" width="60" height="60" style= {{borderRadius:"100%"}}/>
                    
                    <ListItemText
                        primaryText='Photos'
                        secondaryText='Jan 9, 2018' />
                    </ListItem>
                    <ListItem>
                    <ListItemText
                        primaryText='Recipes'
                        secondaryText='Jan 17, 2018' />
                    </ListItem>
                    <ListItem>
                    <ListItemText
                        primaryText='Work'
                        secondaryText='Jan 28, 2018' />
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default ItemsList
