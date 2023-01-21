import React from 'react';
import '../style/Carousel.css'

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full flexi">
                    <div id="slide1" className="carousel-item relative w-full h-3/4 img-carou flex justify-center">
                        <img src="https://drive.google.com/uc?export=view&id=1bXIVOwqDFQ66kPqTwuxLs7xKbQuLQpEh" className="w-3/4 h-3/4" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full h-3/4 flex justify-center">
                        <img src="https://drive.google.com/uc?export=view&id=1aZygMEZBvqB02Ba0Zluyt09oqKjihQCK" className="w-3/4 h-3/4" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Carousel;
