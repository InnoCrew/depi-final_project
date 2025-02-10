import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SwiperCore from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import './TravelEssentials.css';

// Import all images directly
import theifbag from '../../assets/Img/theifbag.png';
import powerbank from '../../assets/Img/powerbank.png';
import neck from '../../assets/Img/neck.png';
import scale from '../../assets/Img/scale.png';
import shoulderbag from '../../assets/Img/shoulderbag.png';
import bootle from '../../assets/Img/bootle.png';
import glasses from '../../assets/Img/glasses.png';
import backpack from '../../assets/Img/backpack.png';
import camera from '../../assets/Img/camera.png';
import travelbag from '../../assets/Img/travelbag.png';
import adapter from '../../assets/Img/adapter.png';
import knife from '../../assets/Img/knife.png';
import handbag from '../../assets/Img/handbag.png';


const TravelEssentials = () => {
    SwiperCore.use([Navigation, Autoplay]);
    return (
        <div>
            <h1 className="heading">Travel Essentials</h1>
            <p className="subheading">
                Discover Polaris-approved travel essentials for a smooth and unforgettable journey
            </p>
            <section className="travel-essentials-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={10} className="text-center">
                            <h3 className="title"><span>#</span>TravellersEssentials</h3>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={10}>
                            <Swiper
                                slidesPerView={5}
                                spaceBetween={0}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                grabCursor={true}
                                centeredSlides={false}
                                loopAdditionalSlides={5}
                                watchSlidesProgress={true}
                                watchSlidesVisibility={true}
                                breakpoints={{
                                    1024: {
                                        slidesPerView: 5,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 5,
                                    },
                                    576: {
                                        slidesPerView: 1,
                                        spaceBetween: 0,
                                    },
                                }}
                                className="swiper-container"
                            >
                                <SwiperSlide>
                                    <a href="https://www.amazon.com/Travelon-Anti-Theft-Classic-Shoulder-Black/dp/B005AIIPLS" target="_blank" rel="noopener noreferrer">
                                        <img src={theifbag} alt="Anti-Theft Classic Mini Shoulder Bag" />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="https://www.amazon.com/Wireless-Yiisonger-10000mAh-Magnetic-Compatible/dp/B09WZT959K" target="_blank" rel="noopener noreferrer">
                                        <img src={powerbank} alt="Wireless Power Bank" />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="https://www.amazon.com/SAIREIDER-Travel-Airplane-Traveling%C3%A1Car%C3%A1Home%C3%AF%C2%BC%C2%8CWashable-Cover%C3%AF%C2%BC%C2%88Black%C3%AF%C2%BC%C2%89/dp/B0CL9T3HQ2" target="_blank" rel="noopener noreferrer">
                                        <img src={neck} alt="Travel Pillows" />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="https://www.amazon.com/travel-inspira-Portable-Suitcase-Included/dp/B07QFTGGYF" target="_blank" rel="noopener noreferrer">
                                        <img src={scale} alt="Digital Luggage Scale" />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="https://www.amazon.com/Waterfly-Crossbody-Backpack-Travel-Daypack/dp/B07WNLW3P8" target="_blank" rel="noopener noreferrer">
                                        <img src={shoulderbag} alt="Crossbody Sling Backpack" />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="https://www.amazon.com/Owala-Insulated-Stainless-Steel-Push-Button-24-Ounce/dp/B085DTZQNZ" target="_blank" rel="noopener noreferrer">
                                        <img src={bootle} alt="Stainless Steel Water Bottle" />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="https://www.amazon.com/ProCase-Sunglasses-Organizer-Sunglass-Multiple/dp/B0CRYWL72V" target="_blank" rel="noopener noreferrer">
                                        <img src={glasses} alt="Sunglasses Storage" />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="https://www.amazon.com/Gieury-Backpack-Expandable-Lightweight-Weekender/dp/B0BDLH7K67" target="_blank" rel="noopener noreferrer">
                                        <img src={backpack} alt="Backpack" />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="https://www.amazon.com/KODAK-AZ528-BK-Digital-Shooting-Connectivity/dp/B0B9BLHWB8" target="_blank" rel="noopener noreferrer">
                                        <img src={camera} alt="Digital Camera" />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="https://www.amazon.com/dp/B0CZNM3K2P" target="_blank" rel="noopener noreferrer">
                                        <img src={travelbag} alt="Hardside Luggage" />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="https://www.amazon.com/NEWVANGA-International-Universal-Worldwide-Charging/dp/B01FO4W5W2" target="_blank" rel="noopener noreferrer">
                                        <img src={adapter} alt="Travel Adapter" />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="https://www.amazon.com/Utensils-Quatish-Portable-Silverware-Stainless/dp/B0CGV18G25" target="_blank" rel="noopener noreferrer">
                                        <img src={knife} alt="Travel Cutlery Set" />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="https://www.amazon.com/Toiletry-Small-Nylon-Lightweight-Shaving/dp/B086QMW1BW" target="_blank" rel="noopener noreferrer">
                                        <img src={handbag} alt="Toiletry Bag" />
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default TravelEssentials;