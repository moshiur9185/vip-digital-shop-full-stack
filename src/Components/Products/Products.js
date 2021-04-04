import React, { useContext, useEffect, useState } from "react";
import './Products.css';
import { Button, Card} from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import { auth } from "../Login/LoginManager";

const Products = (props) => {
    const {name, imgURL, price, _id} = props.product;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const buyNow =( (_id) =>{
      if(loggedInUser){
        history.push("/checkOut");
        const { displayName, email } = loggedInUser;
             const cartProduct = {
               name: displayName,
               email,
               productId: _id
           }
           fetch('https://secure-lowlands-80297.herokuapp.com/addOrder', {
               method: 'POST',
               headers: {
                   'content-type': 'application/json'
               },
               body: JSON.stringify(cartProduct)
           })
               .then(res => res.json())
               .then(data => console.log(data))
               .catch(err => {
                   console.log(err);
               })
      }
      else{
        history.push('/login')
      }
    })

  return (
    <div className="container" >
      <div className="col-lg-4 col-md-6 col-sm-12 cards-container mt-4" >
        <Card style={{ width: "18rem"}}>
          <Card.Img variant="top" style={{ height: "14rem"}} src={imgURL} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <div>
              <span
                style={{
                  fontSize: "20px",
                  color: "green",
                  fontWeight: "bold",
                  marginRight: "6rem",
                }}
              >
                ${price}
              </span>
              <Button variant="primary" onClick={() => auth.currentUser?.email ? buyNow(_id) : history.push('/login')}>
                  Buy Now
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Products;
