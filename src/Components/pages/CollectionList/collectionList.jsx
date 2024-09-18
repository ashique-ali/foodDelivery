import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './collection.css';
import rating from '../../../assets/rating_starts.png'

const CollectionList = () => {
    const [collectionList, setCollectionlist] = useState([]);
    const getCollection = async () => {
        const response = await fetch('http://localhost:4000/api/getProductList', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        setCollectionlist(data.data);
    }

    useEffect(() => {
        getCollection();
    }, [])

    return (
        <div className="collectionList mt-4">
            <h3 className='text-capitalize'>Top dishes</h3>
            <div className="Collectionrow mt-4">
                {collectionList.map((item, index) => (
                    <Link className='text-dark text-decoration-none' to={`/category/${item._id}`} key={index}>
                        <div className="product-card">
                            <div className='bg-white shadow rounded rounded-3'>
                                <div className='img' style={{ margin: 'auto', height: '160px' }}>
                                    <img className='w-100 h-100' src={`http://localhost:4000/${item.imageUrl}`} alt={item.name} />
                                </div>
                                <div className='pdpTitle'>
                                    <div className='pt-3 px-2'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <span className='fw-bold'>{item.name}</span>
                                            <img className='rating' src={rating} alt='item.name' />
                                        </div>
                                        <p className='pdpDescription mt-2 mb-0'>{item.description}</p>
                                        <p className='price'>${item.price}.00</p>
                                    </div>
                                    <div className='mt-2'>
                                        <button className='buyButton w-100'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CollectionList;
