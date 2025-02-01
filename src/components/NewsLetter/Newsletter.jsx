import "./Newsletter.css";
import image from "../../assets/img/subscriber.png"
const Newsletter = () => {
  return (
    <div className="container newsletter my-5">
      <div className="row align-items-center newsletter rounded-4 overflow-hidden">
        {/* Left Section */}
        <div className="col p-5">
          <button className="btn btn-brand-secondary">
            Join our newsletter
          </button>
          <h5>
            Subscribe to see secret deals <br /> prices drop the moment you sign
            up!
          </h5>
          {/* Email Input */}
          <div className="input-group mt-4">
            <input
              type="email"
              className="form-control rounded-start-pill p-3"
              placeholder="Your Email"
            />
            <button className="btn btn-dark border-0 rounded-pill px-5">
              Subscribe
            </button>
          </div>
          <p className="text-muted mt-2">No ads. No trials. No commitments.</p>
        </div>

        {/* Right Section (Image) */}
        <div className="col-md-4 col-lg  p-0 h-100 d-none d-md-block">
          <img
            src={image}
            alt="Resort Pool"
            className="img-fluid w-100 h-100 object-fit-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
