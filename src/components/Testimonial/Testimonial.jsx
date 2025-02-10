import React from 'react';
import './TestimonialStyle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonialCard from './TestimonialCard';

import img1 from '../../assets/Img/b5a44c819e03590386bd139786e28287.jpg';
import img2 from '../../assets/Img/c4318edd3ab05074486c35ccdeec308f.jpg';
import img3 from '../../assets/Img/f345532faca274835b4cb540e16b8a40.jpg';
import img4 from '../../assets/Img/df2629099446e19945caf61fa04e96a7.jpg';

const TestimonialData = [
    {
        name: 'Sara Mohamed',
        location: 'Jakarta',
        review:
            'I’ve been using the hotel booking system for several years now, and it’s become my go-to platform for planning my trips.',
        stars: 5,
        image: img1,
    },
    {
        name: 'Atend John',
        location: 'California',
        review:
            'I had a last-minute business trip, and the hotel booking system came to the rescue. I was able to find a high-quality hotel in no time.',
        stars: 5,
        image: img2,
    },
    {
        name: 'Jane Doe',
        location: 'New York',
        review:
            'The booking system is incredibly reliable and efficient. I’ve used it for both personal and business trips, and it has never let me down.',
        stars: 4,
        image: img3,
    },
    {
        name: 'Emily Smith',
        location: 'London',
        review:
            'This platform has made my travel planning so much easier. The variety of options and ease of use are unmatched!',
        stars: 3,
        image: img4,
    },
];

const Testimonial = () => {
    return (
        <section className="testimonials-section">
                <div className="row align-items-center">
                    {/* Left Text Section */}
                    <div className="col-md-5">
                        <h2 className="title">What our clients are saying about us?</h2>
                        <p className="description">
                            Discover how you can offset your adventure&apos;s carbon emissions and support sustainable initiatives
                            practiced by our operators worldwide.
                        </p>
                    </div>

                    {/* Right Swiper Section */}
                    <div className="col-md-7">
                        <Swiper
                            slidesPerView={1.5}
                            spaceBetween={0}
                            loop={false}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            className="testimonial-slider"
                        >
                            {TestimonialData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <TestimonialCard {...item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
        </section>
    );
};

export default Testimonial;