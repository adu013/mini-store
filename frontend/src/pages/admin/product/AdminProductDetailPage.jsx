import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './AdminProductDetailPage.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Dialog from "../../../components/dialog/Dialog";
import no_image_img from '../../../assets/no-image.jpg';

const AdminProductDetailPage = () => {

    const token = "Token " + localStorage.getItem("token");
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [dialog, setDialog] = useState({
        message: '',
        isLoading: false
    });

    // const handleDialog = (message, isLoading) => {
    //     setDialog({
    //         message,
    //         isLoading
    //     });
    // }

    const handleDelete = () => {
        // handleDialog("Are you sure to delete?", true)
        setDialog({
            message: "Are you sure to delete?",
            isLoading: true
        })
    }

    const sureToDeleteConfirm = (confirm) => {
        if (confirm) {
            const url = "http://localhost:8000/api/stores/products/" + id + "/";
            axios({
                method: "delete",
                url: url,
                headers: {
                    Accept: 'application/json',
                    Authorization: token
                }
            })
                .then((response) => {
                    navigate("/admin")
                }, (error) => {
                    console.log(error)
                });
        } else {
            setDialog({
                message: "",
                isLoading: false
            });
        }
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
            }, (error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>{ product ? <div>
            <p>Detail</p>
            <div className="section-product-detail">
                <img src={no_image_img} alt="" />
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>S${product.price}</p>
            </div>
            <div>
                <div className="btn-update">
                    <Link to={`/admin/product/${id}/update`}>
                        <button>Update Product</button>
                    </Link>
                </div>
                <div className="btn-delete">
                    <button onClick={handleDelete}>Delete Product</button>
                </div>
            </div>
        </div> : <div>No Product Found</div>}

            {dialog.isLoading && <Dialog onDialog={sureToDeleteConfirm} message={dialog.message} />}

        </div>
    )
}

export default AdminProductDetailPage;
