import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AddProductSlider from '../AddProductSlider/AddProductSlider';

const AdminBoard = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://secure-lowlands-80297.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const deleteEvent = id =>{
        fetch(`https://secure-lowlands-80297.herokuapp.com/deleteEvent/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className="">
            <AddProductSlider/>
            <div className="mt-5 d-flex flex-column justify-content-center">
                <h1 className="text-center mt-5">Manage Product</h1>

                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className="text-center">Name</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(pd => {
                                    const { name, price } = pd;
                                    return <tr>
                                        <td className="text-center">{name}</td>
                                        <td className="text-center">${price}</td>
                                        <td className="text-right">
                                            <button className="btn"><FontAwesomeIcon icon={faPencilAlt} /></button>
                                            <button className="btn" onClick={() => deleteEvent(pd._id, alert('Product Delete Successfully'))}><FontAwesomeIcon icon={faTrash} /></button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>

        </div>

    );
};

export default AdminBoard;