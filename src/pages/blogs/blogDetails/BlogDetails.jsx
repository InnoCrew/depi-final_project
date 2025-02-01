import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import axios from "axios";

import "./blogDetails.css";
import ProfileCard from "../../../components/profileCard/ProfileCard";
import BlogArticle from "../../../components/blogArticle/BlogArticle";
import CommentsForm from "../../../components/commentsForm/CommentsForm";
import CommentsList from "../../../components/commentsList/CommentsList";
import RelatedPosts from "../../../components/RelatedPosts/RelatedPosts";
import Newsletter from "../../../components/NewsLetter/Newsletter";
import { Image } from "react-bootstrap";

const BlogDetails = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        // Fetch the current blog
        const blogResponse = await axios.get(
          `http://localhost:8000/blogs/${id}`
        );
        setBlog(blogResponse.data);

        // Fetch all blogs for related posts
        const blogsResponse = await axios.get("http://localhost:8000/blogs");
        setBlogs(blogsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div>
      <div className="position-relative text-center text-white">
        {/* Background Image */}
        <div className="blog-hero">
          <Image
            src={blog.coverImage}
            width={"100%"}
            height={"100%"}
            className="cover-image"
          />
        </div>

        {/* Overlay Content */}
        <div className="container position-relative text-white z-3 d-flex flex-column justify-content-center align-items-center vh-100">
          <p className="text-white">{blog.category}</p>
          <h1 className="display-4 text-white">{blog.title}</h1>
          <p className="mt-2 text-white">{blog.date}</p>
        </div>
      </div>
      <div className="mainContainer">
        <BlogArticle content={blog.content} />
        <ProfileCard author={blog.author} />
        <CommentsForm />
        <CommentsList comments={blog.comments} />
      </div>
      {/* Pass the current post's category and all blogs to the RelatedPosts component */}
      <RelatedPosts currentPostCategory={blog.category} blogs={blogs} />
      <Newsletter />
    </div>
  );
};

export default BlogDetails;
