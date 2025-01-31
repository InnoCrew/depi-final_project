import { Container, Image } from "react-bootstrap";
import "./AboutSection.css";
import aboutImage from "../../assets/img/about.jpg";

const AboutSection = () => {
  return (
    <Container fluid className="about-section p-0 position-relative">
      <Image src={aboutImage} alt="About" fluid className="about-image object-fit-cover" />
      <div className="about-title-container position-absolute top-50 start-50 translate-middle text-center">
        <h2 className="about-title">About</h2>
      </div>
    </Container>
  );
};

export default AboutSection;
