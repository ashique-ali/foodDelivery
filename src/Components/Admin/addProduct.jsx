import { useState } from 'react';
import './admin.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const Addproduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");
    const [file, setFile] = useState("");
    const [status, setStatus] = useState("");
    const [sku, setSku] = useState("");

    const addProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await axios.post('http://localhost:4000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { data } = await axios({
                url: "http://localhost:4000/api/addProduct",
                method: "POST",
                data: { name, price, description, category, stock, status, sku, imageUrl: response.data.filePath }
            })
            toast.success(data.message);
        } catch (error) {
            console.log("Error ::>>", error);
            toast.error("Failed to add product.");
        }
    };

    const allCagegory = [
        "Salad",
        "Rolls",
        "Deserts",
        "Sandwich",
        "Cake",
        "PureVeg",
        "Pasta",
        "Noodles",
    ]

    return (
        <div className='p-4'>
            <main role="main" className="content shadow mauto p-4 rounded rounded-3 mt-4 mb-5">
                <ToastContainer />
                <h4>Add Product</h4>
                <div className="d-flex gap-4 justify-content-between">
                    <div className="form-group w-50">
                        <label for="productName">Product Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="name" name='name' onChange={(e) => setName(e.target.value)} placeholder="Enter product name" />
                    </div>
                    <div className="form-group w-50">
                        <label for="productSku">Product SKU <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="Sku" name='Sku' onChange={(e) => setSku(e.target.value)} placeholder="Enter product SKU" />
                    </div>
                </div>
                <div className="d-flex gap-4 justify-content-between mt-3">
                    <div className="form-group w-50">
                        <label>Product Image</label>
                        <input type="file" id="imageUrl" name="imageUrl" onChange={(e) => setFile(e.target.files[0])} className="form-control" />
                    </div>
                    <div className="form-group w-50">
                        <label for="netWeight">Price<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="price" name='price' onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" />
                    </div>
                </div>

                <div className="d-flex gap-4 justify-content-between mt-3">
                    <div className="form-group w-50">
                        <label>Product Status</label>
                        <select className="form-control" id='Status' name='Status' onChange={(e) => setStatus(e.target.value)}>
                            <option value="Active" selected>Active</option>
                            <option value="In-Active">In-Active</option>
                        </select>
                    </div>

                    <div className="form-group w-50">
                        <label>Product Category</label>
                        <select className="form-control" id='category' name='category' onChange={(e) => setCategory(e.target.value)}>
                            <option value="" selected>Select Category</option>
                            {allCagegory.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                </div>
                <div className="d-flex justify-content-between gap-4 mt-3">
                    <div className="form-group w-50">
                        <label>Stock</label>
                        <select className="form-control" id='stock' name='stock' onChange={(e) => setStock(e.target.value)}>
                            <option value="Yes" selected>Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="form-group w-50">
                        <label>Product Description</label>
                        <textarea className="form-control" id='description' name='description' onChange={(e) => setDescription(e.target.value)} rows={5}></textarea>
                    </div>
                </div>
                <button className="btn btn-success text-center m-auto mt-5 fw-bold p-2 px-3 d-flex" onClick={addProduct}>Add Product</button>
            </main>
        </div>
    )
}

export default Addproduct;