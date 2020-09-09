import React from 'react';
import './App.css';
import { Link, Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import Products from './Products';
import {Login,fakeAuth}from './Login'
import PrivateRoute from './PriveteRoute'
import Admin from './Admin';

const App=()=> {
  return (
    <div>
     <BrowserRouter>
     <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/login">AdminArea</Link></li>

          </ul>
         </nav>
         <Switch>
         <Route exact path="/" component={Home} />
          <Route path="/category" component={Category}/>
          <Route path='/products' component = {Products}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute authed={fakeAuth.isAuthenticated} path="/admin" component={Admin} />
        </Switch>
       </BrowserRouter>     
    </div>
  );
}

export default App;
