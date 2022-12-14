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
                        <h2 className="name__product">??o thun Marvel Changing World</h2>
                        <span className="price__product">299.000??</span>
                        <div className="sale__product"><button>Mua 2 v???i gi?? 259K/s???n ph???m</button></div>
                        <div className="size__product">
                            <div className="guild">
                                <span>K??ch th?????c ??o: <span className="size__selected">S</span></span>
                                <span>H?????ng d???n ch???n size</span>
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
                                    <span>Ch???t li???u: 80% Cotton - 20% Recycle Polyester</span>
                                </p>
                                <p>
                                    <span>-</span> 
                                    <span>L?? s???n ph???m c???a s??? h???p t??c gi???a Coolmate v?? Disney - ????n v??? s??? h???u b???n quy???n Marvel. Chi???c ??o thun c?? th??nh ph???n l?? s???i t??i ch??? t???i Vi???t Nam, h?????ng t???i s??? b???n v???ng trong ng??nh may m???c.</span>
                                </p>
                                <p>
                                    <span>-</span> 
                                    <span>Ch???t li???u co gi??n 4 chi???u ??em l???i s??? tho???i m??i su???t ng??y d??i</span>
                                </p>
                                <p>
                                    <span>-</span> 
                                    <span>????y l?? s???n ph???m th???i trang ??i theo h?????ng b???n v???ng, th??n thi???n h??n v???i m??i tr?????ng</span>
                                </p>
                                <p>
                                    <span>-</span> 
                                    <span>T??? h??o s???n xu???t t???i Vi???t Nam</span>
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
                    C???i ti???n ph???n c??? t???t h??n, ??m h??n v?? b???n h??n
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}