import { menu_list } from "../../../assets/assets";
import React from 'react';
import './collection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Menu = ({ category, setCategory }) => {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1 className='h1e'>Our Menu Collection</h1>
            <p className='explore-menu-text text-capitalize'>Choose from a diverse menu featuring a delectable array of dishes.</p>
            <Slider {...settings}>
                {menu_list.map((item, index) => {
                    return (
                        <div key={index} className='explore-menu-list-item' style={{display: 'unset'}}>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
                            <p className='item_menu'>{item.menu_name}</p>
                        </div>
                    )
                })}
            </Slider>
            <hr />
        </div>
    );
};
export default Menu;
