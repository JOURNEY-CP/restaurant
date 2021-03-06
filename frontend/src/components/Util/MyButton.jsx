import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class MyButton extends Component {
    render() {
        const {color, variant, href, icon, data} = this.props;
        return href ? (
            <Button
                className="myButton"
                startIcon={icon}
                variant={variant||"contained"}
                color={color || "primary"}
                href={href}
                onClick={() => this.props && this.props.onClick && this.props.onClick()}
            >
            {data || ""}
            </Button>
        ):(
                <Button
                    
                className="myButton"
                startIcon={icon}
                variant={variant||"contained"}
                color={color||"primary"}
                onClick={() => this.props && this.props.onClick && this.props.onClick()}
            >
            {data || ""}
            </Button>
        )
    }
}
