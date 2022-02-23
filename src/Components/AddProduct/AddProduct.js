import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddProductSlider from "../AddProductSlider/AddProductSlider";
import './AddProduct.css';
// admin H
const AddProduct = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imgURL, setImgURL] = useState(null)

  const onSubmit = (data) => {
      const productData = {
          name : data.name,
          price : data.price,
          imgURL : imgURL
      };
      const url = `https://secure-lowlands-80297.herokuapp.com/addProduct`;

      fetch(url, {
          method : 'POST',
          headers : { 'Content-Type': 'application/json'},
          body : JSON.stringify(productData)
      })
      .then(res => alert('Product Update Successful'))
  };

  const handleImageUpload =(event)=>{
      console.log(event.target.files[0]);
      const imageData = new FormData();
      imageData.set('key', 'dc77ceed1eab949ec83fac4f0f284b28');
      imageData.append('image', event.target.files[0])

      axios.post('https://api.imgbb.com/1/upload',      
      imageData)
      .then(res => {
        setImgURL(res.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className=" row">
      <AddProductSlider/>
            <div className="col-md-8 mt-5">
                <h1 className="mt-4 text-center">Add Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="addProduct">
                        <input name="name" placeholder="product name" ref={register} required/>
                        <br />
                        <input name="price" placeholder="price" ref={register} required/>
                        <br />
                        <div className="container-img">
                        <input className="upload-box " type="file" onChange={handleImageUpload} required/>
                        </div>
                        <br />
                        <a href="/addProduct"><input className="btn btn-success" type="submit" /></a>
                    </div>
                </form>
            </div>
        </div>
  );
};

export default AddProduct;
