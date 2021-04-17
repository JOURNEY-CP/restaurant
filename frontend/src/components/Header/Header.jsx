
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import LeftDrawer from './LeftDrawer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../globalStyle.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }, 
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header=()=>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <LeftDrawer/>
                    <Typography variant="h6" className={classes.title}>
                        QR FoodOrder
                    </Typography>
                    <Link to="/cart">
                        <IconButton
                            href="mailto:journeynitdgp@gmail.com"
                            edge="start" 
                            className={classes.menuButton} 
                            color="inherit" 
                            aria-label="mail"
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;