import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class MyButton extends Component {
    render() {
        const { color,variant, href } = this.props;
        return href ? (
               <Button
                variant={variant||"contained"}
                color={color || "primary"}
                href={href}
                onClick={() => this.props && this.props.onClick && this.props.onClick()}
            >
            {this.props.data||"Button"}
            </Button>
        ):(
            <Button
                variant={variant||"contained"}
                color={color||"primary"}
                onClick={() => this.props && this.props.onClick && this.props.onClick()}
            >
            {this.props.data||"Button"}
            </Button>
        )
    }
}
