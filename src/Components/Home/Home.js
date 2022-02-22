import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
import Banar from "../Banar/Banar";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://secure-lowlands-80297.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section>
      <Header />
      <Banar/>
      <div className="container-fluid">
        <div className="row text-center d-flex align-items-center">
          {products.length === 0 && (
            <div class=" mt-5">
              <div class="spinner-border text-info mt-5" role="status"></div>
            </div>
          )}
          {products.map((product) => (
            <Products product={product}></Products>
          ))}
        </div>
      </div>
        <Footer />
    </section>
  );
};

export default Home;
