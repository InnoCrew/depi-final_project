import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./RelatedPosts.css";
import { Link } from "react-router-dom";

const RelatedPosts = ({ currentPostCategory, blogs }) => {
  // Filter blogs to only include posts in the same category as the current post
  const filteredPosts = blogs.filter(
    (blog) => blog.category === currentPostCategory
  );

  return (
    <div className="related-posts my-5">
      <h5 className="text-center section-title mb-4">You Might Also Like</h5>
      <Swiper
        className="container"
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
        {filteredPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="blog-card text-center">
              <Link to={`/blogs/${post.id}`}>
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="img-fluid rounded"
                />
              </Link>
              <h6 className="mt-3">
                <Link to={`/blogs/${post.id}`} className="text-decoration-none">
                  {post.title}
                </Link>
              </h6>
              <p className="text-muted">{post.date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedPosts;
