// src/Carousel.js
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="carousel-slide">
                    <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
                    <div className="carousel-caption">
                        <h2>Slide 1 Title</h2>
                        <p>Slide 1 Description</p>
                    </div>
                </div>
                <div className="carousel-slide">
                    <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
                    <div className="carousel-caption">
                        <h2>Slide 2 Title</h2>
                        <p>Slide 2 Description</p>
                    </div>
                </div>
                <div className="carousel-slide">
                    <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
                    <div className="carousel-caption">
                        <h2>Slide 3 Title</h2>
                        <p>Slide 3 Description</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

