import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import React, { Component } from 'react';
import './servings.css';

export default class Servings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quantity:this.props.quantity||0
        }
    }
    handleServings = val => {
        const { quantity } = this.state;
        const { onClick } = this.props;
        const servings=quantity+val;
        if (servings >= 1) {
            this.setState({ quantity: servings });
            onClick(servings);
        }
    }
    render() {
        const { quantity } = this.state;
        return (
            <div className="servings">
                <svg className="servings-man">
                    <use href="/images/icons.svg#icon-man"></use>
                </svg>
                <span className="servings-text">{quantity} SERVINGS</span>
                <div className="servings-buttons">
                    <IconButton className="servings-button" color="primary" onClick={()=>this.handleServings(-1)}>
                        <RemoveCircleIcon/>
                    </IconButton>
                    <IconButton className="servings-button" color="primary" onClick={()=>this.handleServings(1)}>
                        <AddCircleIcon/>
                    </IconButton>
                </div>
            </div>
        )
    }
}
