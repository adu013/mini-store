import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './AdminHome.css';
import no_image_img from '../../../assets/no-image.jpg';
// import products from '../../../assets/products';
import Product from "../../../components/product/Product";
import axios from "axios";

const AdminHome = () => {

    const token = "Token " + localStorage.getItem("token");
    const [products, setProducts] = useState([]);
    const fetchProducts = () => {
        axios({
            method: "get",
            url: "http://localhost:8000/api/stores/products/",
            headers: {
                Accept: 'application/json',
                Authorization: token
            }
        })
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            }, (error) => {
                console.log(error);
            })
    };

    useEffect(() => {
        fetchProducts();
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
                        return (
                            <div>
                                <Link to={`/admin/product/${item.id}`}>
                                    <Product
                                        key={i}
                                        id={item.id}
                                        productName={item.name}
                                        productDescription={item.description}
                                        productImage={item.img}
                                        productPrice={item.price}
                                    />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AdminHome;
