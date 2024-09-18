import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import './admin.css';

const Productlist = () => {
    const [productList, setProductList] = useState([]);
    const [deleteId, setDeleteId] = useState([]);

    const getAllProduct = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/getProductList', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setProductList(data.data);
        } catch (error) {
            console.log('Error ::>>', error);
        }
    };

    useEffect(() => {
        getAllProduct();
    }, []);

    const setId = (id) => {
        setDeleteId(id);
        console.log("deleteId ::>>", deleteId);
    }

    const deleteHandler = async () => {
        const response = await fetch(`http://localhost:4000/api/deleteProduct/${deleteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json();
        if (result.success) {
            setProductList(productList.filter((item) => {
                return item._id !== deleteId;
            }))
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
    }
    return (
        <div className="container m-0 p-4">
            <ToastContainer />
            <div className="row">
                <h4 className="p-0">Product List</h4>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Sku</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th className="m-0">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.length > 0 ? (
                            productList.map((item, index) => (
                                <tr key={item._id} className="tableList">
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <img
                                            src={"http://localhost:4000/"+item.imageUrl}
                                            alt={item.name}
                                            width="50"
                                            height="50"
                                        />
                                    </td>
                                    <td>{item.price}</td>
                                    <td>{item.sku}</td>
                                    <td>{item.category}</td>
                                    <td>{item.status}</td>
                                    <td>{item.description}</td>
                                    <td className="d-flex gap-3">
                                        <span className="text-danger" data-bs-toggle="modal"  data-bs-target="#exampleModal" onClick={() =>setId(item._id)} style={{cursor: 'pointer'}}><RiDeleteBin6Line /></span>
                                        <span className="text-success" style={{cursor: 'pointer'}}><GoPencil /></span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="text-center"><h4 className="p-4">Oops Data not found ...!</h4></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
          
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Confirmation</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5>Are You Sure Delete This Item?</h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={deleteHandler}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productlist;
