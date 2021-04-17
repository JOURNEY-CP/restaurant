import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FeedbackIcon from '@material-ui/icons/Feedback';
import CodeIcon from '@material-ui/icons/Code';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BugReportIcon from '@material-ui/icons/BugReport';
import MenuIcon from '@material-ui/icons/Menu';
import GithubIcon from '@material-ui/icons/GitHub';
import PostAddIcon from '@material-ui/icons/PostAdd';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function LeftDrawer(props) {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <h1 style={{marginLeft:"15px",color:"#3f51b5"}}>QR FoodOrder</h1>
      <Divider/>
      <div onClick={()=>history.push("/items")} style={{textDecoration:"none",color:"inherit"}}>
        <ListItem>
            <ListItemIcon><MenuBookIcon /></ListItemIcon>
            <ListItemText primary={"View All Items"} />
        </ListItem>
      </div>
      <div onClick={()=>history.push("/cart")} style={{textDecoration:"none",color:"inherit"}}>
        <ListItem>
            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
            <ListItemText primary={"View Cart"} />
        </ListItem>
      </div>
      <Divider />
      <h3 style={{marginLeft:"15px",color:"#3f51b5"}}>Discussions</h3>
      <Divider />
      <a href="https://github.com/JOURNEY-CP/restaurant" target="blank" style={{textDecoration:"none",color:"inherit"}}>
        <ListItem>
            <ListItemIcon><GithubIcon /></ListItemIcon>
            <ListItemText primary={"View Source"} />
        </ListItem>
      </a>
      <a href="https://github.com/JOURNEY-CP/restaurant/issues" target="blank" style={{textDecoration:"none",color:"inherit"}}>
        <ListItem>
            <ListItemIcon><BugReportIcon /></ListItemIcon>
            <ListItemText primary={"Issues"} />
        </ListItem>
        </a>
         <a href="https://github.com/JOURNEY-CP/restaurant/discussions" target="blank" style={{textDecoration:"none",color:"inherit"}}>
        <ListItem>
            <ListItemIcon><QuestionAnswerIcon /></ListItemIcon>
            <ListItemText primary={"Want to discuss Anything or add new feuture?"} />
        </ListItem>
        </a>
      <a href="mailto:journeynitdgp@gmail.com" target="blank" style={{textDecoration:"none",color:"inherit"}}>
        <ListItem>
            <ListItemIcon><FeedbackIcon /></ListItemIcon>
            <ListItemText primary={"Feedback"} />
        </ListItem>
        </a>
      <Divider />
      <h3 style={{marginLeft:"15px",color:"#3f51b5"}}>Look at our other Apps</h3>
      <Divider />
      <a href="https://jobstocker.web.app/" target="blank" style={{textDecoration:"none",color:"inherit"}}>
        <ListItem>
            <ListItemIcon><PostAddIcon /></ListItemIcon>
            <ListItemText primary={"JobStocker"} />
        </ListItem>
      </a>
      <a href="https://journey-cp.github.io/NOTES/" target="blank" style={{textDecoration:"none",color:"inherit"}}>
        <ListItem>
            <ListItemIcon><MenuBookIcon /></ListItemIcon>
            <ListItemText primary={"Learn"} />
        </ListItem>
      </a>
      <a href="https://journey-cp.github.io" target="blank" style={{textDecoration:"none",color:"inherit"}}>
        <ListItem>
            <ListItemIcon><CodeIcon /></ListItemIcon>
            <ListItemText primary={"30 days of Code"} />
        </ListItem>
      </a>
      <Divider />
      <h5 style={{marginLeft:"15px",color:"#3f51b5"}}>Made with ❤️ by Team Journey</h5>
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment>
          <IconButton edge="start" onClick={toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'left'} open={state["left"]} onClose={toggleDrawer("left", false)}>
            {list("left")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
