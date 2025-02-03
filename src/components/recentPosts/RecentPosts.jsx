import React from "react";
import BlogCard2 from "./BlogCard2";
import "./recent.css";

// Import images properly
import image1 from "../../assets/Img/59ab38925f903978dc8fe5acac97446f.jpg";
import image2 from "../../assets/Img/8d50ddb5f534b2e21571d62bb456b9f0.jpg";
import image3 from "../../assets/Img/d9223a9d4ed959ba9e22235030862fad.jpg";
import image4 from "../../assets/Img/3e06ae53bae7fd813091e87dd0cc762b.jpg";

import avatar1 from "../../assets/Img/a4d9c0bf9f1f64cbea7636797ba101b6.jpg";
import avatar2 from "../../assets/Img/0881ca9b1b677d55689a6c3793fe0e3d.jpg";
import avatar3 from "../../assets/Img/df2629099446e19945caf61fa04e96a7.jpg";

const blogPosts = [
  {
    id: 1,
    category: "Cultural",
    image: image1,
    date: "18 Sep 2024",
    readTime: "6",
    comments: 38,
    title:
      "Ultimate Guide to Traveling Egypt: 10 Tips for a Seamless Experience",
    author: {
      name: "Edmund Reid",
      avatar: avatar1,
    },
  },
  {
    id: 2,
    category: "Adventure",
    image: image2,
    date: "20 Sep 2024",
    readTime: 8,
    comments: 45,
    title: "Honeymoon Adventure: A Journey of Romance and Discovery",
    author: {
      name: "Sarah Johnson",
      avatar: avatar2,
    },
  },
  {
    id: 3,
    category: "Architecture",
    image: image3,
    date: "22 Sep 2024",
    readTime: 5,
    comments: 25,
    title: "Exploring the Best Buildings Around Italy",
    author: {
      name: "Louis Partridge",
      avatar: avatar3,
    },
  },
  {
    id: 4,
    category: "Food",
    image: image4,
    date: "12 Dec 2021",
    readTime: 6,
    comments: 85,
    title: "Flavors of the World: A Journey Through Cultural Cuisines",
    author: {
      name: "Edmund Reid",
      avatar: avatar1,
    },
  },
];

const RecentPosts = () => {
  return (
    <section className="section-box py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold fs-1">Recent Posts</h1>
            <p className="lead text-muted">
              Favorite destinations based on customer reviews
            </p>
          </div>
        </div>

        <div className="blog-cards-container" id="blog-cards">
          {blogPosts.map((post) => (
            <BlogCard2 key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
