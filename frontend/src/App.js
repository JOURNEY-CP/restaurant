import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/Home';
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import ItemsList from './components/ItemsList';
import SampleItem from './components/SampleItem';
function App() {
  return (
    <div className="App">
      <Header/>
      <TopAppBarFixedAdjust>
        <Router>
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/items'} component={ItemsList}/>
            <Route exact path={'/items/:item_id'} component={SampleItem}/>
            <Route path="*" component={NotFound} /> 
          </Switch>
        </Router>
      </TopAppBarFixedAdjust>
      <Footer/>
    </div>
  );
}

export default App;
