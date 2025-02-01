import "./BlogArticle.css";
import img2 from "../../assets/img/3.webp";
import { Image } from "react-bootstrap";

function BlogArticle({ content }) {
  // Split the content into two parts
  const contentParts = content.text.split(/(?<=\S)\s+(?=\S)/); // Split by spaces while preserving words
  const halfLength = Math.ceil(contentParts.length / 2);
  const firstHalf = contentParts.slice(0, halfLength).join(" ");
  const secondHalf = contentParts.slice(halfLength).join(" ");

  return (
    <>
      <div className="container container1">
        <div className="content">
          <p>{firstHalf}</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image src={content.image} />
            </div>
          </div>
        </div>

        <div className="content">
          <p>{secondHalf}</p>
        </div>
      </div>
    </>
  );
}

export default BlogArticle;
