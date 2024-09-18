import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './collection.css';

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
        <div className="collectionList">
            <h3 className='text-capitalize'>Top dishes</h3>
            <div className="Collectionrow">
                {collectionList.map((item, index) => (
                    <Link className='text-dark text-decoration-none' to={`/category/${item._id}`} key={index}>
                        <div className="product-card">
                            <div className='bg-white shadow rounded rounded-3'>
                                <div className='img p-2 pt-3' style={{ width: '220px', margin: 'auto', height: '160px' }}>
                                    <img className='w-100 h-100 rounded rounded-3' src={`http://localhost:4000/${item.imageUrl}`} alt={item.name} />
                                </div>
                                <div className='pdpTitle text-center'>
                                    <span className='fw-bold'>{item.name}</span>
                                    <p className='pdpDescription m-0'>{item.description}</p>
                                    <p className='m-0'>Rs. {item.price}.00</p>
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
