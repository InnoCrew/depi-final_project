import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BlogCard from "./BlogCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./trending.css";

// Import images correctly
import img1 from "../../assets/Img/59ab38925f903978dc8fe5acac97446f.jpg";
import img2 from "../../assets/Img/8d50ddb5f534b2e21571d62bb456b9f0.jpg";
import img3 from "../../assets/Img/d9223a9d4ed959ba9e22235030862fad.jpg";
import img4 from "../../assets/Img/3e06ae53bae7fd813091e87dd0cc762b.jpg";
import img5 from "../../assets/Img/1ccb97a0e0ede31b7b647b5c9ff9a704.jpg";
import img6 from "../../assets/Img/69c2800fc1f2de6801b309783e07a6be.jpg";
import img7 from "../../assets/Img/1e483f98534240f240ce82abf1b4fa83.jpg";

import avatar1 from "../../assets/Img/a4d9c0bf9f1f64cbea7636797ba101b6.jpg";
import avatar2 from "../../assets/Img/0881ca9b1b677d55689a6c3793fe0e3d.jpg";
import avatar3 from "../../assets/Img/df2629099446e19945caf61fa04e96a7.jpg";

const blogPosts = [
  {
    id: 1,
    category: "Cultural",
    image: img1,
    date: "18 Sep 2024",
    readTime: "6",
    comments: 38,
    title:
      "Ultimate Guide to Traveling Egypt: 10 Tips for a Seamless Experience",
    author: { name: "Edmund Reid", avatar: avatar1 },
  },
  {
    id: 2,
    category: "Adventure",
    image: img2,
    date: "20 Sep 2024",
    readTime: 8,
    comments: 45,
    title: "Honeymoon Adventure: A Journey of Romance and Discovery",
    author: { name: "Sarah Johnson", avatar: avatar2 },
  },
  {
    id: 3,
    category: "Architecture",
    image: img3,
    date: "22 Sep 2024",
    readTime: 5,
    comments: 25,
    title: "Exploring the Best Buildings Around Italy",
    author: { name: "Louis Partridge", avatar: avatar3 },
  },
  {
    id: 4,
    category: "Food",
    image: img4,
    date: "12 Dec 2021",
    readTime: 6,
    comments: 85,
    title: "Flavors of the World: A Journey Through Cultural Cuisines",
    author: { name: "Edmund Reid", avatar: avatar1 },
  },
  {
    id: 5,
    category: "Landscape",
    image: img5,
    date: "7 May 2019",
    readTime: 3,
    comments: 35,
    title: "Iconic Landscapes: Exploring the Leaning Tower of Pisa and Beyond",
    author: { name: "Sarah Johnson", avatar: avatar2 },
  },
  {
    id: 6,
    category: "Sports",
    image: img6,
    date: "22 Jun 2020",
    readTime: 8,
    comments: 20,
    title: "Sky's the Limit: Explore the Extreme Sports You Can Experience",
    author: { name: "Louis Partridge", avatar: avatar3 },
  },
  {
    id: 7,
    category: "Party",
    image: img7,
    date: "27 Oct 2023",
    readTime: 6,
    comments: 95,
    title: "Arabian Nights: A Magical Parties Experience from Around the World",
    author: { name: "Edmund Reid", avatar: avatar1 },
  },
];

const TrendingNow = () => {
  return (
    <section className="section-box py-5 trending">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6">
            <h2 className="display-5 fw-medium">Trending Now</h2>
            <p className="lead text-muted">
              Top Destinations Everyone's Excited About
            </p>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          // breakpoints={{
          //   320: { slidesPerView: 1, spaceBetween: 20 },
          //   768: { slidesPerView: 2, spaceBetween: 30 },
          //   1024: { slidesPerView: 3, spaceBetween: 40 },
          // }}
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <BlogCard post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendingNow;
