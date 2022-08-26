import React, {useState} from "react";
import { Link } from "react-router-dom";

import {BiChevronDown} from 'react-icons/bi'

import {Navbar} from '../../components/Navbar'
import {Footer} from '../../components/Footer'


import './category.scss'

const ListSelect = [
    "Mới nhất",
    "Bán chạy nhất",
    "Giá từ thấp đến cao",
    "Giá từ cao đến thấp",
    "% Giảm giá nhiều",
]

export const Category = () => {
    const [active, setActive] = useState(false)
    const [select, setSelect] = useState('Sắp Xếp')

    const handleActive = () => {
        setActive(!active)
    }

    const handleValue = (index) => {
        setSelect(ListSelect[index])
        handleActive()
    }

    return (
        <>  
            <Navbar />
            <div className="category">
                <div className="category__title">
                    <h4>Sản phẩm</h4>
                    <div className={active ? "select-menu active" : "select-menu"}>
                        <div 
                            onClick={handleActive}
                            className="select-btn"
                        >
                            <span className="sBtn-text">{select}</span>
                            <i><BiChevronDown /></i>
                        </div>

                        <ul className="options">
                            {ListSelect.map((item, index) => (
                                <li 
                                    onClick={() => handleValue(index)}
                                    key={index} 
                                    className="option"
                                >
                                    <span className="option-text">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="category__product">
                    <h4>Sản Phẩm</h4>
                    <Products />
                </div>
            </div>
            <Footer />
        </>
    )
}

export const Products = () => {
    return (
        <div className="quantity container row">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export const Product = () => {

    return (
        <div className="product col-1" >
            <Link to="/detail">
                <div className='hidden__img' >
                    <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/June2022/CoolMate0537.jpg" alt="" />
                    <div className="size__prodcuct">
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                    </div>
                    </div>
                    <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/June2022/CoolMate0538.jpg" alt="" />
                    <div className="product__name ">
                        <h4>Áo thun cổ tròn Excool - Xám</h4>
                        <span>299.000đ</span>
                    <div className='sale'>
                        Mua 2 chỉ còn 259k/chiếc
                    </div>
                </div>
            </Link>
        </div>  
    )
}

