import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { 
    IoLogoFirebase, IoSettingsSharp, IoStorefront, 
    IoLogOutOutline, IoMenu, IoSearch, IoPersonOutline,
} from 'react-icons/io5'
import {AiTwotoneAppstore, AiOutlineShoppingCart, AiOutlineWindows} from 'react-icons/ai'
import {FaBook, FaShoppingCart, FaTrash} from 'react-icons/fa'
import {RiChatHistoryFill} from 'react-icons/ri'
import {FiChevronRight} from 'react-icons/fi'

import './css.scss'

export const Navbar = () => {
    const [active, setActive] = useState(false)
    const [show, setShow] = useState(false)

    const handleActive = () => {
        setActive(!active)
    }

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <>
        <div className={show ? "navbar__left" : "navbar__left close"}>
            <div className="nav__left__header">
                <span className='title__icon'><IoLogoFirebase /></span>
                <h1 className="title__header"> HRadleyD</h1>
            </div>
            <ul className="left__list">
                <li className="left__item">
                    <Link to="/" className="left__link">
                        <div className="letter">
                            <span><AiTwotoneAppstore /></span>
                            <span>Home</span>
                        </div>
                    </Link>
                    <ul className="item__menu">
                        <li className="menu__list blank">
                            <Link to="/home" className="menu__link">Home</Link>
                        </li>
                    </ul>
                </li>

                <li onClick={handleActive} className="left__item">
                    <Link to="/category" className="left__link">
                        <div className="letter">
                            <span><FaBook /></span>
                            <span>Category</span>
                        </div>
                        <div className={active ? "icon__down rotate" : "icon__down"}>
                            <FiChevronRight />
                        </div>
                    </Link>
                    <ul className={active ? "active item__menu" : "item__menu"}>
                        <li className="menu__list">
                            <Link to="/category/fashion" className="menu__link">Fashion</Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/category/accessory" className="menu__link">Accessory</Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/cetegory/style" className="menu__link">Style</Link>
                        </li>
                    </ul>
                </li>

                <li className="left__item">
                    <Link to="/cart" className="left__link">
                        <div className="letter">
                            <span><FaShoppingCart /></span>
                            <span>Cart</span>
                        </div>
                    </Link>
                    <ul className="item__menu">
                        <li className="menu__list blank">
                            <Link to="/cart" className="menu__link">Cart</Link>
                        </li>
                    </ul>
                </li>

                <li className="left__item">
                    <Link to="/person/login" className="left__link">
                        <div className="letter">
                            <span><IoStorefront /></span>
                            <span>My Shop</span>
                        </div>
                    </Link>
                    <ul className="item__menu">
                        <li className="menu__list blank">
                            <Link to="/person/login" className="menu__link">My Shop</Link>
                        </li>
                    </ul>
                </li>

                <li className="left__item">
                    <Link to="/setting" className="left__link">
                        <div className="letter">
                            <span><IoSettingsSharp /></span>
                            <span>Setting</span>
                        </div>
                    </Link>
                    <ul className="item__menu">
                        <li className="menu__list blank">
                            <Link to="/setting" className="menu__link">Setting</Link>
                        </li>
                    </ul>
                </li>

                <li className="left__item">
                    <Link to="/history" className="left__link">
                        <div className="letter">
                            <span><RiChatHistoryFill /></span>
                            <span>History</span>
                        </div>
                    </Link>
                    <ul className="item__menu">
                        <li className="menu__list blank">
                            <Link to="/history" className="menu__link">History</Link>
                        </li>
                    </ul>
                </li>

                <li className="left__item">
                    <Link to="/trash" className="left__link">
                        <div className="letter">
                            <span><FaTrash /></span>
                            <span>Trash</span>
                        </div>
                    </Link>
                    <ul className="item__menu">
                        <li className="menu__list blank">
                            <Link to="/trash" className="menu__link">Trash</Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className={show ? "profile" : "profile shut_down"}>
                <div className="profile__container">
                    <div className="profile__img">
                        <img src="https://tackexinh.com/wp-content/uploads/2021/03/hinh-nen-girl-xinh-4k-cho-pc-03.jpg" alt="" />
                    </div>
                    <div className="profile__intro">
                        <div>Mh</div>
                        <div>Thanh vien bac</div>
                    </div>
                </div>
                <div className="profile__icons">
                    <span><IoLogOutOutline /></span>
                </div>
            </div>
        </div>
        
        <div className="nav__top">
            <div className="nav__top__header">
                <div className="header__logo">
                    <span onClick={handleShow}><IoMenu /></span>
                    <span>HRadleyD</span>
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                    <span><IoSearch /></span>
                </div>
                <div className="header__icons">
                    <Link to="/"><AiOutlineWindows /></Link>
                    <Link to="/cart"><AiOutlineShoppingCart /></Link>
                    <Link to="/person/login"><IoPersonOutline /></Link>
                </div>  
            </div>
        </div> 
        </>
    )
}
