import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import './AdminProductAddPage.css';

const AdminProductAddPage = () => {
    const navigate = useNavigate()
    const token = "Token " + localStorage.getItem("token");
    const url = "http://localhost:8000/api/stores/products/"
    const [data, setData] = useState({
        name: "",
        description: "",
        price: 0.00
    })
    const [selectedFile, setSelectedFile] = useState(null);

    function handleChange(event) {
        const newData = { ...data }
        newData[event.target.id] = event.target.value
        setData(newData)
    }

    function handleFileUpload(event) {
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('img', selectedFile);
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price);
        axios({
            method: "post",
            url: url,
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "type": "formData",
                Authorization: token
            },
            data: formData
        }).then((response) => {
            console.log(response)
            navigate("/admin")
        }, (error) => {
            console.log(error)
        })

    }
    return (
        <div className="add-product-container">
            <h2>Add a new product</h2>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="inputs">
                <div className="input">
                    <input
                        onChange={(event) => handleChange(event)}
                        id="name"
                        value={data.name}
                        placeholder="name"
                        type="text"
                    />
                </div>
            <div className="input">
                <input
                    onChange={(event) => handleChange(event)}
                    id="description"
                    value={data.description}
                    placeholder="description"
                    type="text"
                />
            </div>
            <div className="input">
                <input
                    onChange={(event) => handleChange(event)}
                    id="price"
                    value={data.price}
                    placeholder="price"
                    type="number"
                    min="0.00"
                    max="99999.99"
                    step="0.01"
                />
            </div>
            <div className="file-input">
                <input
                    onChange={(event) => handleFileUpload(event)}
                    id="img"
                    type="file"
                />
            </div>
            </div>
            <div className="section-submit">
                <button className="btn-submit">Submit</button>
            </div>
            </form>

            <div className="section-cancel">
                <Link to="/admin">Cancel</Link>
            </div>
        </div>
    )
}

export default AdminProductAddPage;
