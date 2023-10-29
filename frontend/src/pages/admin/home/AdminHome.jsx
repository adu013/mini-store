import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './AdminHome.css';
import products from '../../../assets/products';
import Product from "../../../components/product/Product";
import axios from "axios";

const AdminHome = () => {

    const [prods, setProds] = useState([]);
    const fetchProds = () => {
        axios({
            method: "get",
            url: "http://localhost:8000/api/stores/products/"
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            })
    };

    useEffect(() => {
        fetchProds();
    }, []);

    return (
        <div className="products-container">
            <div className="products">
                <h1>All Products</h1>
                <hr />
                <div>
                    <Link to="/admin/product/add"><p>Add a new product</p></Link>
                </div>
                <div className="product">
                    {products.map((item, i) => {
                        return <Product
                            key={i}
                            id={item.id}
                            productName={item.productName}
                            productDescription={item.productDescription}
                            productImage={item.image}
                            productPrice={item.productPrice}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default AdminHome;
