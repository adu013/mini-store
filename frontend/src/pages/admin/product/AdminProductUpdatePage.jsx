import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const AdminProductUpdatePage = () => {

    const token  = "Token " + localStorage.getItem("token");
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [data, setData] = useState({
        description: "",
        price: 0.00
    })

    function handleChange(event) {
        const newData = { ...data }
        newData[event.target.id] = event.target.value
        setData(newData)
    }

    const handleUpdate = () => {
        console.log("Handling Update")
        const url = "http://localhost:8000/api/stores/products/" + id + "/";
        axios({
            method: "patch",
            url: url,
            headers: {
                Accept: 'application/json',
                Authorization: token
            },
            data: {
                description: data.description,
                price: data.price
            }
        })
            .then((response) => {
                navigate(`/admin/product/${id}`)
            }, (error) => {
                console.log(error)
            })

    }

    function handleSubmit(event) {
        event.preventDefault();
        handleUpdate();
    }

    useEffect(() => {
        console.log('useEffect');
        const url = "http://localhost:8000/api/stores/products/" + id;
        axios({
            method: "get",
            url: url,
            headers: {
                Accept: 'application/json',
                Authorization: token
            }
        })
            .then((response) => {
                console.log(response);
                setProduct(response.data);
                setData({
                    description: response.data["description"],
                    price: response.data["price"]
                })
            }, (error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="update-product-container">
            { product ? <div>
                <h3>Update details of product: {product.name}</h3>
                <img src="" alt="" />
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div>
                    <div className="input">
                        Description:
                        <input
                            onChange={(event) => handleChange(event)}
                            id="description"
                            type="text"
                            value={data.description}
                        />
                    </div>
                    <div className="input">
                        Price: S$
                        <input
                            onChange={(event) => handleChange(event)}
                            id="price"
                            type="number"
                            min="0.00"
                            max="99999.99"
                            step="0.01"
                            value={data.price}
                        />
                    </div>
                    </div>

                    <div className="section-submit">
                        <button className="btn-submit">Confirm Update</button>
                    </div>
                </form>
                <div>
                    <div className="btn-cancel-update">
                        <Link to={`/admin/product/${id}`}>
                            <button>Cancel</button>
                        </Link>
                    </div>
                </div>
                </div> : <div>No Product Found</div>}
        </div>
    )
}

export default AdminProductUpdatePage;
