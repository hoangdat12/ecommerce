import React from 'react'
import { Link } from 'react-router-dom'

import {Navbar} from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import {Carousel} from '../../components/Carousel'
import { Products } from '../Category/Category'

import './home.scss'

export const Home = () => {

    return (
        <>
            <Navbar />
            <Carousel />
            <div className="home">
                <div className="list__product">
                    <h3 className='product__title'>T-Shirt</h3>
                    <Products />
                </div>

                <div className="container">
                    <div className="home__intro">
                        <div className="intro__img">
                            <img src="https://mcdn.coolmate.me/image/August2022/mceclip0.jpg" alt="" />
                        </div>
                        <div className="intro__letter">
                            <h3>Coolmate</h3>
                            <h3>CLEAN DENIM</h3>
                            <p>Một chiếc quần Jeans đầu tiên tại Coolmate được sử dụng chất liệu là Cotton Tái sinh (Regenerative Cotton) - loại Cotton chất lượng và trông bằng quy trình sạch, bền vững. Chiếc quần với vải Denim được dệt toàn bộ tại nhà máy Nhơn Trạch, Đồng Nai của Saitex - nhà máy với nhiều trang máy móc, thiết bị hiện đại với quy trình sản xuất khép kín, giảm thiểu CO2 và nước thải ra môi trường.</p>
                            <button>More Information</button>
                        </div>
                    </div>
                </div>

                <div className="home__intro__img">
                    <h2 className="title">Fashion Basics</h2>
                    <div className="intro__product">
                        <div className="product">
                            <img src="https://mcdn.coolmate.me/image/July2022/mceclip0_32.png" alt="" />
                        </div>
                        <div className="product">
                            <img src="https://mcdn.coolmate.me/uploads/January2022/CoolmateBasic2.png" alt="" />
                        </div>
                        <div className="product">
                            <img src="https://mcdn.coolmate.me/uploads/January2022/CoolmateBasic3.png" alt="" />
                        </div>
                        <div className="product">
                            <img src="https://mcdn.coolmate.me/uploads/February2022/Mask_Group_(2).png" alt="" />
                        </div>
                        <div className="product">
                            <img src="https://mcdn.coolmate.me/uploads/January2022/CoolmateBasic4.png" alt="" />
                        </div>
                    </div>
                    <div className="intro__link">
                        <h5>Dòng sản phảm mặc cơ bản chất lượng tốt và giá rẻ của Coolmate</h5>
                        <div className='button'><button>Shopping</button></div>
                    </div>
                </div>

                <div className="container">
                    <div className="home__intro__list">
                        <div className="list__product">
                            <Link to='#'>
                                <div className="img__list">
                                    <img src="https://mcdn.coolmate.me/image/June2022/mceclip0_43.jpg" alt="" />
                                </div>
                            </Link>
                            <div className="button">
                                <button>Do mac trong</button>
                            </div>
                        </div>

                        <div className="list__product">
                            <Link to='#'>
                                <div className="img__list">
                                    <img src="https://mcdn.coolmate.me/image/June2022/mceclip0_99.jpg" alt="" />
                                </div>
                            </Link>
                            <div className="button">
                                <button>Do mac trong</button>
                            </div>
                        </div>

                        <div className="list__product">
                            <Link to='#'>
                                <div className="img__list">
                                    <img src="https://mcdn.coolmate.me/image/June2022/mceclip1_56.jpg" alt="" />
                                </div>
                            </Link>
                            <div className="button">
                                <button>Do mac trong</button>
                            </div>
                        </div>

                        <div className="list__product">
                            <Link to='#'>
                                <div className="img__list">
                                    <img src="https://mcdn.coolmate.me/image/June2022/mceclip1_61.jpg" alt="" />
                                </div>
                            </Link>
                            <div className="button">
                                <button>Do mac trong</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
