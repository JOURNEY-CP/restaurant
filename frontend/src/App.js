/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import dotenv from 'dotenv';
import {  Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ItemsList from './components/ItemsList';
import NotFound from './components/NotFound';
import SampleItem from './components/SampleItem';

dotenv.config();
function App() {
    console.log('hello World');
    return (
        <div className="App">
            <div>
              <Header />
              <TopAppBarFixedAdjust>
                    <br />
                    <div className="app-main-area">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/items" component={ItemsList} />
                            <Route exact path="/items/:item_id" component={SampleItem} />
                            <Route exact path="/cart" component={Cart} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </div>
            </TopAppBarFixedAdjust>
            </div>
            <div>
            <Footer />
            </div>
            </div>
       
    );
}

export default App;
