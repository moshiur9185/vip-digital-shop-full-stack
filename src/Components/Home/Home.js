import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';


const Home = () => {
    const [products, setProducts] = useState([]); 
    useEffect(() => {
        fetch('https://secure-lowlands-80297.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
   <div>
       <Header/>
        <div className="bg-light">
             {
                 products.length === 0 &&<div class="text-center mt-5">
                 <div class="spinner-border text-info mt-5" role="status">
                 </div>
               </div>
            }
            {
                products.map(product => <Products product={product}></Products>)
            }
        </div>
   </div>
    );
};

export default Home;