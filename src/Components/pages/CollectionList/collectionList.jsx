import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './collection.css';
import rating from '../../../assets/rating_starts.png'

const CollectionList = () => {
    const [collectionList, setCollectionlist] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(12);
    const indexOfLastItem = currentPage * itemPerPage;
    const [count, setCount] = useState();
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItem = collectionList.slice(indexOfFirstItem, indexOfLastItem);
    const totalPage = Math.ceil(collectionList?.length / itemPerPage);

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

    const previousHandler = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextHandler = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => {
        getCollection();
    }, [0])

    return (
        <div className="collectionList mt-4">
            <h3 className='text-capitalize'>Top dishes</h3>
            <div className="Collectionrow mt-4">
                {currentItem.map((item, index) => (
                    <Link className='text-dark text-decoration-none' to={`/product/${item._id}`} key={index}>
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
            <div className='d-flex justify-content-end gap-2 mt-4'>
                <button className='paginationButton' onClick={previousHandler}>Previous</button>
                <span className='m-0 mt-1'>{currentPage}/{totalPage}</span>
                <button className='paginationButton' onClick={nextHandler}>Next</button>
            </div>
        </div>
    );
}

export default CollectionList;
