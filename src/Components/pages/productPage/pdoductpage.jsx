import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/footer";
import Navbar from "../../Navbar/navbar";
import './productPage.css'

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const getProductById = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/product/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const result = await response.json();
            setProduct(result.data);
        } catch (error) {
            console.log("Error ::>>", error);
        }
    }

    useEffect(() => {
        getProductById();
    }, [id]);
    if (!product) return <div>Loading...</div>;
    return (
        <>
            <Navbar />
            <div className="m-auto mt-4" style={{ width: '80%' }}>
                <div className="bredCrumb d-flex m-0">
                    <span>{product.name}</span> / <span>
                        <Link className="text-decoration-none text-dark" to="/">Home</Link>
                    </span>
                </div>
                <hr></hr>
                <div className="d-flex font-sans">
                    <div className="flex-shrink-0 pdpImage position-relative" style={{ width: '40%' }}>
                        <img className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rounded-lg" loading="lazy" src={`http://localhost:4000/${product.imageUrl}`} alt={product.name} style={{ width: '300px', height: 'auto' }} />
                    </div>
                    <form className="flex-grow-1 p-4" style={{ width: '60%' }}>
                        <div className="d-flex flex-wrap">
                            <h4 className="flex-grow-1 font-medium text-dark">
                                {product.name}
                            </h4>
                            <div className="w-100 mt-2 order-1 fs-5 fw-bold">
                                <p>Price: {product.price}.00</p>
                            </div>
                            <div className="text-muted text-sm">
                                In stock
                            </div>
                        </div>
                        <div className="d-flex align-items-baseline mb-4 border-bottom">
                            <div className="d-flex gap-2 w-75">
                                <p> <b>Description :</b> {product.description}</p>
                            </div>
                        </div>
                        <div className="d-flex gap-3 mb-4">
                            <div className="d-flex gap-3">
                                <button className="btn" type="submit" style={{background: '#ff4c24', color: '#fff'}}>
                                    Buy now
                                </button>
                                <button className="btn btn-outline-secondary" type="button">
                                    Add to bag
                                </button>
                            </div>
                        </div>
                        <p className="text-muted">
                            Free shipping on all continental US orders.
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default ProductPage;
