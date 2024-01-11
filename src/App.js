
import { Component } from 'react';
import {BrowserRouter,Switch,Route,Redirect  } from 'react-router-dom';
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import './App.css';

class App extends Component {
  render()
  {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/books" component={BookList} /> 
      <Route exact path="/books/:id" component={BookDetails} /> 
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
    </BrowserRouter>
  );}
}

export default App;