import React from "react";
import {Link} from "react-router-dom"

import {HiPlusSm, HiMinusSm} from 'react-icons/hi'
import {IoClose} from 'react-icons/io5'
import {FaRegCheckCircle} from 'react-icons/fa'

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CarouselProduct } from "../../components/Carousel";

import './cart.scss'

export const Cart = () => {

    return (
        <>
        <Navbar />
        <div className="cart">
            <h2>My Shopping Cart</h2>
            <div className="my__cart container">
                <div className="order">
                    <div className="order__note row">
                        <div className="description col-5">
                            Description
                        </div>
                        <div className="size col-1">
                            Size
                        </div>
                        <div className="quantify col-3">
                            Quantify
                        </div>
                        <div className="remove col-2">
                            Remove
                        </div>
                        <div className="price col-1">
                            Price
                        </div>
                    </div>
                    <div className="order__detail row">
                        <div className="description col-5">
                            <div className="des__img">
                                <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/June2022/CoolMate0537.jpg" alt="" />
                            </div>
                            <div className="des__infor">
                                <h5 className="name">Áo sơ mi nam dài tay Café Sticky</h5>
                                <div className="code">Product Code: ML107</div>
                            </div>
                        </div>
                        <div className="size col-1">
                            <span>S</span>
                        </div>
                        <div className="quantify col-3">
                            <div className="select__quantify">
                                <span><HiMinusSm /></span>
                                <span>1</span>
                                <span><HiPlusSm /></span>
                            </div>
                        </div>
                        <div className="remove col-2">
                            <span><IoClose /></span>
                        </div>
                        <div className="price col-1">
                            <span>$55</span>
                        </div>
                    </div>
                </div>
                <div className="payment row">
                    <div className="discount col-3">
                        <span>Discount: $0.00</span>
                    </div>
                    <div className="shipment col-3">
                        <span>Delivery: $0.99</span>
                    </div>
                    <div className="price col-3">
                        <span>Price: $299.00</span>
                    </div>
                    <div className="total col-3">
                        <span>Total: $299.00</span>
                    </div>
                </div>
                <div className="summary">
                    <h4>If you have to discount code, you can use it here</h4>
                    <div className="sumary__check row">
                        <div className="input__code col-9">
                            <input type="text" placeholder="Enter discount code..." />
                            <button>Apply Discount</button>
                        </div>
                        <Link to='/checkout' className="checkout__button col-3">
                            <span>Checkout</span>
                            <span><FaRegCheckCircle /></span>
                        </Link>
                        <div className="blank col-9"></div>
                        <Link to='/' className="continue__button col-3"><span>Continue Shopping</span></Link>
                    </div>
                </div>
            </div>
        </div>
        <CarouselProduct />
        <Footer />
        </>
    )
}