import React from 'react'
import {Link} from 'react-router-dom'

export const Footer = () => {

    return (
        <div className="footer">
            <div className="footer__content">
                <div className="content">
                    <h4 className="title">Explore</h4>
                    <ul className="list__text">
                        <li className="list__item">
                            <Link to="/product/polo" className="list__link">Polo</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/product/t-shirt" className="list__link">T-shirt</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/product//shirts" className="list__link">Shirts</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/product/watch" className="list__link">Watch</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/product/necklace" className="list__link">Necklace</Link>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <h4 className="title">Service</h4>
                    <ul className="list__text">
                        <li className="list__item">
                            <Link to="/" className="list__link">Exchange</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/" className="list__link">Refund</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/" className="list__link">Q&A</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/" className="list__link">Promotion policy</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/" className="list__link">Delivery policy</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/" className="list__link">Size guide</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/" className="list__link">HRadleyD Member</Link>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <h4 className="title">Document - Recruitment</h4>
                    <ul className="list__text">
                        <li className="list__item">
                            <Link to="/" className="list__link">Registration</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/" className="list__link">Recruit</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/" className="list__link">Care & Share</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/" className="list__link">Factory</Link>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <h4 className="title">Contact</h4>
                    <ul className="list__text">
                        <li className="list__item">
                            <Link to="/" className="list__link">Email</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/" className="list__link">Facbook</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/" className="list__link">TikTok</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/" className="list__link">Youtube</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/" className="list__link">Instagram</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
