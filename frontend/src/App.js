import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path="*" component={NotFound} /> 
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
