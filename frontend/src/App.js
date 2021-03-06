/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import dotenv from 'dotenv';
import {  Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './components/globalStyle.css';
import Header from './components/Header/Header';
import ListItems from './components/ListItems';
import NotFound from './components/NotFound';
import Order from './components/Order/Order';
import Item from './components/Items/Item';

dotenv.config();
function App() {
    console.log(process.env);
    return (
        <div className="App">
            <div>
              <Header />
              <TopAppBarFixedAdjust>
                    <br />
                    <div className="app-main-area">
                        <Switch>
                            <Route exact path="/" component={ListItems} />
                            <Route exact path="/items" component={ListItems} />
                            <Route exact path="/items/:item_id" component={Item}/>
                            <Route exact path="/cart" component={Cart} />
                            <Route exact path="/order" component={Order} />
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
