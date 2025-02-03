import "./trending.css";

// Import icons properly
import calendarIcon from "../../assets/Img/calendar.svg";
import timeIcon from "../../assets/Img/time.svg";
import commentIcon from "../../assets/Img/comment.svg";

const BlogCard = ({ post }) => {
  return (
    <div className="card-news">
      <div className="card-image">
        <button className="label">{post.category}</button>
        <img src={post.image} alt={post.title} />
      </div>
      <div className="card-body">
        <div className="card-info">
          <div className="card-meta">
            <span className="details">
              <span className="icon">
                <img src={calendarIcon} alt="Calendar" />
              </span>
              {post.date}
            </span>
            <span>
              <span className="icon">
                <img src={timeIcon} alt="Time" />
              </span>
              {post.readTime} mins
            </span>
            <span>
              <span className="icon">
                <img src={commentIcon} alt="Comments" />
              </span>
              {post.comments} comments
            </span>
          </div>
          <h3 className="card-title">
            <a href="#">{post.title}</a>
          </h3>
          <div className="card-author">
            <img src={post.author.avatar} alt={post.author.name} />
            <p>{post.author.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
