import React,{useState,useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import connect from 'react-redux/es/connect/connect';
import './styles.css';
import {onAddItemToCart} from '../redux/actions/cart';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
 
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function SampleItem(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [item,modifyItem] = useState({id:"",name:"",price:"",description:"",quantity:1});
  const id=useParams().item_id;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleServings = (val) =>{
    const servings=item.quantity+val;
    if(servings>=1)
    modifyItem({...item,"quantity":servings});
  }
  
  useEffect(() => {
    fetch(
      `http://localhost:4000/api/user/item/${id}`,
      {
        method: "GET",
        // headers: new Headers({
        //   Accept: "application/vnd.github.cloak-preview"
        // })
      }
    )
      .then(res => res.json())
      .then(response => {
        //console.log(response)
        
        modifyItem({...response,"quantity":1})

      })
      .catch(error => console.log(error));
  },[id] );
  return (
    
    <Card className={classes.root} id="recipe">
      <Link to="/items">View all items</Link>
      <CardMedia
        className={classes.media} id="recipe__fig"
        
        image="/images/recipe.jpg"
        title={item.name}
      />
      <CardHeader className="recipe__title" 
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        
        title={item.name}
        
      />
      <CardContent>
      <Typography variant="h5" component="h2">
          PRICE : {item.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="recipe__info">
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
      {/* <div className="recipe-info"> */}
          <svg className="recipe__info-icon">
              <use href="/images/icons.svg#icon-man"></use>
          </svg>
          <span className="recipe__info-data recipe__info-data--people">{item.quantity}</span>
          <span className="recipe__info-text"> SERVINGS</span>
{/* 
          <div class="recipe__info-buttons"> */}
          <CardActions disableSpacing className="recipe__info-buttons">
              <button className="btn-tiny btn-decrease"  onClick={()=>{handleServings(-1)}}>
                  <svg>
                      <use href="/images/icons.svg#icon-circle-with-minus"></use>
                  </svg>
              </button>
              <button className="btn-tiny btn-increase"  onClick={()=>{handleServings(1)}}>
                  <svg>
                      <use href="/images/icons.svg#icon-circle-with-plus"></use>
                  </svg>
              </button>
          </CardActions>
          {/* <button className="recipe__love">
            <svg className="header__likes">
                <use href="/images/icons.svg#icon-heart"></use>
            </svg>
            
        </button> */}

        <button class="btn-small recipe__btn recipe__btn recipe__btn--add" onClick={()=>props.onAddItemToCart(item)}>
            <svg class="search__icon">
                <use href="/images/icons.svg#icon-shopping-cart"></use>
            </svg>
            <span>Add to cart</span>
        </button>
          {/* </div> */}
      {/* </div> */}
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {item.description}
          </Typography>
          {/* <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
      order: state.cart.order,
  };
};

const mapDispatchToProps = dispatch => ({
  onAddItemToCart: data => dispatch(onAddItemToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SampleItem);
