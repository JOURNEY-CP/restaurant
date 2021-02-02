import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/Home';
import ItemsList from './components/ItemsList';
import SampleItem from './components/SampleItem';
import PrivateRoute from './components/Common/PrivateRoute';
import Login from './components/Common/Login';
import Orders from './components/Admin/Orders';

import Cart from './components/Cart';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <TopAppBarFixedAdjust>
                    <br />
                    <div className="app-main-area">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/items" component={ItemsList} />
                            <Route exact path="/items/:item_id" component={SampleItem} />
                            <PrivateRoute access="admin" exact path="/admin" component={Orders} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/cart" component={Cart} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </div>
                </TopAppBarFixedAdjust>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
