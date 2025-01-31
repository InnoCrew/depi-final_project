import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./RelatedPosts.css";

const relatedPosts = [
  {
    title: "Achieving Your Goals: How Business Consulting Helps",
    date: "02/27/2024",
    image: "src/assets/img/Gemini_Generated_Image_43pkjf43pkjf43pk.jpeg",
  },
  {
    title: "The Power of Leadership Coaching in Business",
    date: "02/27/2024",
    image: "src/assets/img/Gemini_Generated_Image_90576r90576r9057.jpeg",
  },
  {
    title: "Innovative Solutions: Insights from Business Consulting",
    date: "02/27/2024",
    image: "src/assets/img/Gemini_Generated_Image_90576r90576r9057modify.jpeg",
  },
  {
    title: "Why Entrepreneurs Need Business Coaching",
    date: "02/27/2024",
    image: "src/assets/img/Gemini_Generated_Image_v51h75v51h75v51h.jpeg",
  },
];

const RelatedPosts = () => {
  return (
    <div className=" related-posts my-5">
      <h5 className="text-center section-title mb-4">You Might Also Like</h5>
      <Swiper
        className="container "
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {relatedPosts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="blog-card  text-center">
              <img
                src={post.image}
                alt={post.title}
                className="img-fluid rounded"
              />
              <h6 className="mt-3 ">{post.title}</h6>
              <p className="text-muted">{post.date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedPosts;
