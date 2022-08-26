import React from "react";

export const Carousel = () => {

    return (
            <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100/uploads/July2022/Excool-Banner-website.jpeg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100/uploads/July2022/Banner-Coolmate-Active-opt-1.jpeg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100/uploads/July2022/Desktop_75.jpeg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}

export const CarouselProduct = () => {

    return (
        <>
        <div id="carouselExampleControls" className="carousel slide carousel__product" data-bs-ride="carousel">
            <h3>San Pham Hot</h3>
            <div className="carousel-inner container">
                <div className="carousel-item active">
                    <div className="list__product row">
                        <div className="product col-1">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                        <div className="product col-1">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                        <div className="product col-1">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                        <div className="product col-1 hidden">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                        <div className="product col-1 hidden">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="list__product row">
                        <div className="product col-1">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                        <div className="product col-1">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                        <div className="product col-1">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                        <div className="product col-1 hidden">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                        <div className="product col-1 hidden">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="list__product row">
                        <div className="product col-1">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                        <div className="product col-1">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                        <div className="product col-1">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                        <div className="product col-1 hidden">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                        <div className="product col-1 hidden">
                            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Cafe_xam.jpg" alt="" />
                            <div className="infor__product">
                                <h5>Áo thun Marvel Graphics Avengers</h5>
                                <span>299.000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}