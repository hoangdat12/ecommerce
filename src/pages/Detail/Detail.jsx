import React, {useState} from "react";

import {HiPlusSm, HiMinusSm} from 'react-icons/hi'
import {BsCartPlus} from 'react-icons/bs'

import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

import './detail.scss'

export const Detail = () => {
    const [active1, setActive1] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [quantity, setQuantity] = useState(1)

    const handlePlusQuantity = () => {
        setQuantity(quantity + 1)
    }

    const handleMinusQuantity = () => {
        if (quantity === 0) {
            return
        }
        setQuantity(quantity - 1)
    }

    const handleActive = (index) => {
        switch(index) {
            case '1':
                setActive1(true)
                setActive2(false)
                setActive3(false)
                break;
            case '2':
                setActive1(false)
                setActive2(true)
                setActive3(false)
                break;
            case '3':
                setActive1(false)
                setActive2(false)
                setActive3(true)
                break;
            default:
                break;
        }

    }

    return (
        <>
        <Navbar />
        <div className="detail">
            <div className="container">
                <div className="row">
                    <div className="detail__img col-5">
                        <div className="detail__img__container">
                            <img className={active1 ? "product__img__detail" : "product__img__detail hidden"}src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/July2022/11._Changing-the-world.jpg" alt="" />
                            <img className={active2 ? "product__img__detail img__hidden" : "product__img__detail img__hidden hidden"} src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/July2022/DSC08832_1copy.jpg" alt="" />
                            <img className={active3 ? "product__img__detail img__hidden" : "product__img__detail img__hidden  hidden"} src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/July2022/unes_3.jpg" alt="" />
                            <div className="img_select">
                                <div onClick={() => handleActive('1')} className={active1 ? "img active" : "img"}><img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/July2022/11._Changing-the-world.jpg" alt="" /></div>
                                <div onClick={() => handleActive('2')} className={active2 ? "img active" : "img"}><img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/July2022/DSC08832_1copy.jpg" alt="" /></div>
                                <div onClick={() =>  handleActive('3')} className={active3 ? "img active" : "img"}><img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/July2022/unes_3.jpg" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="detail__infor col-7">
                        <h2 className="name__product">Áo thun Marvel Changing World</h2>
                        <span className="price__product">299.000đ</span>
                        <div className="sale__product"><button>Mua 2 với giá 259K/sản phẩm</button></div>
                        <div className="size__product">
                            <div className="guild">
                                <span>Kích thước Áo: <span className="size__selected">S</span></span>
                                <span>Hướng dẫn chọn size</span>
                            </div>
                            <div className="size">
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                            </div>
                        </div>
                        <div className="quantity">
                            <div className="quantity__number">
                                <span onClick={handleMinusQuantity}><HiMinusSm /></span>
                                <span>{quantity}</span>
                                <span onClick={handlePlusQuantity}><HiPlusSm /></span>
                            </div>
                            <div className="quantity__button">
                                <span><BsCartPlus /></span>
                                <span>Add In Cart</span>
                            </div>
                        </div>
                        <div className="information__product">
                            <h5>
                                <span>Characteristics</span>
                                <span><HiPlusSm /></span>
                            </h5>
                            <div className="characteristics">
                                <p>
                                    <span>-</span> 
                                    <span>Chất liệu: 80% Cotton - 20% Recycle Polyester</span>
                                </p>
                                <p>
                                    <span>-</span> 
                                    <span>Là sản phẩm của sự hợp tác giữa Coolmate và Disney - đơn vị sở hữu bản quyền Marvel. Chiếc áo thun có thành phần là sợi tái chế tại Việt Nam, hướng tới sự bền vững trong ngành may mặc.</span>
                                </p>
                                <p>
                                    <span>-</span> 
                                    <span>Chất liệu co giãn 4 chiều đem lại sự thoải mái suốt ngày dài</span>
                                </p>
                                <p>
                                    <span>-</span> 
                                    <span>Đây là sản phẩm thời trang đi theo hướng bền vững, thân thiện hơn với môi trường</span>
                                </p>
                                <p>
                                    <span>-</span> 
                                    <span>Tự hào sản xuất tại Việt Nam</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="more__infor">
            <div className="container">
                <h5>DAC DIEM NOI BAC</h5>
                <div className="more__infor__img">
                    <img src="https://mcdn.coolmate.me/image/July2022/listing_marvel_3fix.jpg" alt="" />
                </div>
                <div className="more__infor__img">
                    <img src="https://mcdn.coolmate.me/image/April2022/SINGLE-2.jpg" alt="" />
                </div>
                <div className="more__infor__img">
                    <img src="https://mcdn.coolmate.me/image/April2022/cocoo2.jpg" alt="" />
                </div>
                <div className="more">
                    Cải tiến phần cổ tốt hơn, ôm hơn và bền hơn
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}