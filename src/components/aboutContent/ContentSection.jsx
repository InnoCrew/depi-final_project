import "./ContentSection.css";
import contentImage from "../../assets/img/1733808183235.jpg";

const ContentSection = () => {
  return (
    <div className="content-section flex-row-reverse p-2 m-auto d-flex align-items-center">
      <div className="left-section w-50 me-4">
        <img className="img-fluid rounded" src={contentImage} alt="Content" />
      </div>
      <div className="right-section w-75 d-flex flex-column justify-content-center">
        <div className="title">Post</div>
        <p>
          The community can share content by posting stories, links, images, and
          videos.
        </p>
      </div>
    </div>
  );
};

export default ContentSection;
