import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/Home';
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import ItemsList from './components/ItemsList';
import SampleItem from './components/SampleItem';
import Cart from './components/Cart';
import dotenv from 'dotenv';
dotenv.config();
function App() {
  console.log(process.env)
  console.log(process.env.REACT_APP_HOMEPAGE+'/');
  return (
    <div className="App">
     <Router basename={process.env.PUBLIC_URL}>
      <Header/>
      <TopAppBarFixedAdjust>
      <br/>
      <div className="app-main-area">
       
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/items' component={ItemsList}/>
            <Route exact path='/items/:item_id' component={SampleItem}/>
            <Route exact path='/cart' component={Cart}/>
            <Route path="*" component={NotFound} /> 
          </Switch>
      </div>
      </TopAppBarFixedAdjust>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
