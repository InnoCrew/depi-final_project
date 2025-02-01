import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./blogs.css";
import Loader from "../../components/loader/Loader";
import { Image } from "react-bootstrap";

const App = () => {
  const [blogs, setBlogs] = useState([]); // All blogs fetched from the API
  const [filteredBlogs, setFilteredBlogs] = useState([]); // Blogs after applying search and filter
  const [visibleBlogs, setVisibleBlogs] = useState(6); // Number of blogs to display
  const [loading, setLoading] = useState(true); // Loading state
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [selectedCategory, setSelectedCategory] = useState("All"); // Selected category for filtering

  // Fetch blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/blogs");
        setBlogs(response.data);
        setFilteredBlogs(response.data); 
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Function to handle search and filter
  useEffect(() => {
    let filtered = blogs;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    setFilteredBlogs(filtered);
    setVisibleBlogs(6); // Reset visible blogs when filters change
  }, [searchTerm, selectedCategory, blogs]);

  // Function to load more blogs
  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 6);
  };

  // Get unique categories for the filter buttons
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  // Show loader while data is being fetched
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="blogs">
      {/* Hero Section */}
      <div className="blogs-hero-section">
        <header className="header">
          <h1>BLOG</h1>
          <p>Recent travel blog posts</p>
        </header>
      </div>

      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-button ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog List */}
      <div className="blog-list">
        {filteredBlogs.slice(0, visibleBlogs).map((blog) => (
          <div key={blog.id} className="blogCard">
            {/* Blog Title and Metadata */}
            <div className="blog-info start-0 w-100">
              <span className="blog-category bg-black p-2 rounded-2 start-0 text-start">
                {blog.category}
              </span>
              <div className="metadata d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="profile-pic rounded-circle overflow-hidden me-2">
                    <Image
                      src={blog.author.profilePicture}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <strong>{blog.author.name}</strong>
                </div>
                <strong>{blog.date}</strong> 
              </div>
              <h2 className="mt-1">
                <Link className="blog-title" to={`/blogs/${blog.id}`}>
                  {blog.title}
                </Link>
              </h2>
            </div>

            {/* Cover Image */}
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="cover-image"
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleBlogs < filteredBlogs.length && (
        <div className="d-flex justify-content-center">
          <button onClick={loadMoreBlogs} className="load-more-btn">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
