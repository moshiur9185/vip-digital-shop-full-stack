import React, { createContext, useEffect, useState} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Checkout from "./Components/CheckOut/CheckOut";
import Login from "./Components/Login/Login";
import AddProduct from "./Components/AddProduct/AddProduct";
import AdminBoard from "./Components/AdminBoard/AdminBoard";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { auth } from "./Components/Login/LoginManager";
import OrderDetails from "./Components/OrderDetails/OrderDetails";
import Products from "./Components/Products/Products";
 
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log('user Found', user);
        setLoggedInUser(user)
      } else {
        console.log('user not Found');
        setLoggedInUser({})
      }
    });
  }, [setLoggedInUser])
  return (
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
         <Router>
          <div>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/admin">
                <AdminBoard />
              </Route>
              <PrivateRoute path="/order">
                <OrderDetails/>
              </PrivateRoute>
              <Route path="/product">
                <Home/>
              </Route>
              <PrivateRoute path="/checkOut">
                <Checkout />
              </PrivateRoute>
              <PrivateRoute path='/Dashboard'>
                <AddProduct />
              </PrivateRoute>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
