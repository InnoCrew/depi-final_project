import "./HeroBlog.css";
const HeroBlog = () => {
  return (
    <div className="position-relative text-center text-white">
      {/* Background Image */}
      <div className="blog-hero"></div>

      {/* Overlay Content */}
      <div className="container position-relative text-white z-3 d-flex flex-column justify-content-center align-items-center vh-100">
        <p className=" text-white ">General Lifestyle</p>
        <h1 className="display-4 text-white ">
          The Essential Guide to Selecting a Business Coach
        </h1>
        <p className="mt-2 text-white">02/28/2024</p>
      </div>
    </div>
  );
};

export default HeroBlog;
