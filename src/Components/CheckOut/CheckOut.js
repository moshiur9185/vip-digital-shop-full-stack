import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './CheckOut.css'
import Header from '../Header/Header';
import { Container, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Order = () => {
    const [productsDetail, setProductsDetail] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { email } = loggedInUser;
    const [orderProducts, setOrderProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orderProducts/${email}`)
            .then(res => res.json())
            .then(data => setOrderProducts(data))
            .catch(err => {
                console.log(err);
            })
        console.log('running hook');
    }, [email])
  
    useEffect(() => {
        const orderProductsId = orderProducts.map(pd => pd.productId)
        fetch('http://localhost:5000/productsById', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderProductsId)
        })
            .then(res => res.json())
            .then(data => setProductsDetail(data))
    }, [orderProducts])

    const history = useHistory();
    const handleCheckout = () => {
        history.push('/home')
        const { displayName, email } = loggedInUser;
        const orderDetails = {
            name: displayName,
            email,
            productsDetail,
            quantity:1,
            createDate: new Date()
        }
        fetch('http://localhost:5000/checkoutOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const total = productsDetail.reduce((total, pd) => total + parseInt(pd.price), 0);
    return (
        <div>
            <Header />
            <Container className="mt-5">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className="text-center">Name</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productsDetail.map(pd => {
                                    const { name, price, quantity } = pd
                                    return <tr>
                                        <td className="text-center">{name}</td>
                                        <td className="text-center">{1}</td>
                                        <td className="text-center">${price}</td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </Table>
                            <div className="border border-success d-flex justify-content-between">
                                <h2 >Total : </h2>
                                <h2>$ {total}</h2>
                            </div>
                    <div className="text-right mt-3">
                         <button className="btn btn-success" onClick={() => handleCheckout(alert('Order Successful...'))}>Checkout</button>
                    </div>
                </Container>
        </div>
    );
};

export default Order;