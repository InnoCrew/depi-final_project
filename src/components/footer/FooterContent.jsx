import "./footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaRss,
} from "react-icons/fa";

const FooterContent = () => {
  return (
    <footer className="container py-5 footer-content">
      <div className="row text-center">
        {/* Where We Are Now */}
        <div className="col-md-4 mb-4">

          <h6 className="section-title">Where we are now</h6>
          <h6 className="footer-title">Where we are now</h6>

          <img
            src="src/assets/img/footer-map-img.png"
            alt="World Map"
            className="img-fluid my-3"
          />
        </div>

        {/* Follow Us */}
        <div className="col-md-4 mb-4">
          <h6 className="section-title">Follow us</h6>
          <h6 className="footer-title">Follow us</h6>
          <div className="d-flex justify-content-center gap-3 my-3">
            <a href="#" className="text-dark">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-dark">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-dark">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-dark">
              <FaPinterest size={24} />
            </a>
            <a href="#" className="text-dark">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-dark">
              <FaRss size={24} />
            </a>
          </div>
        </div>
        {/* Newsletter */}
        <div className="col-md-4 mb-4">
          <h6 className="section-title">Newsletter</h6>
          <h6 className="footer-title">Newsletter</h6>
          <form className="d-flex flex-column align-items-center my-3">
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Email Address"
              required
            />
            <button type="submit" className="btn btn-dark text-white w-100">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
