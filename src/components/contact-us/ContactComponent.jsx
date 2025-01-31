import {useEffect} from "react";
import "./Contact.css";
import img from '/contact-us-top-backround-img.png';

function ContactComponent() {
  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  return (
    <div>
      {/* First Section */}
      <div className="container my-5">
        <div className="row align-items-center container1">
          {/* Left Content */}
          <div className="col-12 col-md-12 col-lg-6 mb-4">
            <h1 className="h">Feel free to contact us anytime!</h1>
            <p>
              Praesent hendrerit, mi facilisis eleifend enim lobortis,
              adipiscing bus lorem, non fringilla.
            </p>
          </div>
          {/* Right Content */}
          <div className="col-12 col-md-6 text-center img-container">
            <div className="background-light-blue img-container">
              <img src={img} className="illustration" alt="Contact Us" />
            </div>
          </div>
        </div>
        <div className="empty-div"></div>
      </div>

      {/* Second Section */}
      <div className="container my-5">
        <div className="row">
          {/* Office 1 */}
          <div className="col-12 col-md-12 col-lg-4 mb-4">
            <h4 className="fw-bold">Our office in London</h4>
            <p>
              <i className="fa-solid fa-mobile-screen pe-3"></i> New York +(123)
              456 -7890
            </p>
            <p>
              <i className="fa-solid fa-envelope pe-3"></i>{" "}
              innovio@qodeinteractive.com
            </p>
            <p>
              <i className="fa-solid fa-thumbtack pe-3"></i> 95 Place de la Gare
            </p>
          </div>
          {/* Office 2 */}
          <div className="col-12 col-md-12 col-lg-4 mb-4">
            <h4 className="fw-bold">Our office in Paris</h4>
            <p>
              <i className="fa-solid fa-mobile-screen pe-3"></i> New York +(123)
              456 -7890
            </p>
            <p>
              <i className="fa-solid fa-envelope pe-3"></i>{" "}
              innovio@qodeinteractive.com
            </p>
            <p>
              <i className="fa-solid fa-thumbtack pe-3"></i> 95 Place de la Gare
            </p>
          </div>
          {/* Office 3 */}
          <div className="col-12 col-md-12 col-lg-4 mb-4">
            <h4 className="fw-bold">Our office in Barcelona</h4>
            <p>
              <i className="fa-solid fa-mobile-screen pe-3"></i> New York +(123)
              456 -7890
            </p>
            <p>
              <i className="fa-solid fa-envelope pe-3"></i>{" "}
              innovio@qodeinteractive.com
            </p>
            <p>
              <i className="fa-solid fa-thumbtack pe-3"></i> 95 Place de la Gare
            </p>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="container mt-5">
        <div className="row">
          {/* Map Section */}
          <div className="col-12 col-lg-6 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13823.911612007507!2d31.44354699778535!3d29.98006503603199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583b581cb3cdeb%3A0x218e2c4b2fc20240!2z2KfZhNiq2KzZhdi5INin2YTYq9in2YTYq9iMINmF2K_ZitmG2Kkg2YbYtdix2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCs!5e0!3m2!1sar!2seg!4v1737633849629!5m2!1sar!2seg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          {/* Contact Form Section */}
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <form className="w-100 needs-validation" noValidate>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control inps"
                  id="name"
                  placeholder="Name"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">This field is required!</div>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control inps"
                  id="email"
                  placeholder="Email"
                  required
                />
                <div className="valid-feedback">Valid Email!</div>
                <div className="invalid-feedback">Invalid Email!</div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control inps"
                  id="subject"
                  placeholder="Subject"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">This field is required!</div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control inps"
                  id="message"
                  rows="1"
                  placeholder="Write a message..."
                  required
                ></textarea>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">This field is required!</div>
              </div>
              <button type="submit" className="btn btn-primary p-2 pe-3 ps-3">
                <span className="pe-3">Send a Message</span>
                <i className="fa-solid fa-arrow-right arrow"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default ContactComponent;