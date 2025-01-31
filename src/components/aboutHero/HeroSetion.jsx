import "./HeroSection.css";
import heroImage from "../../assets/img/1733808183235.jpg";

const HeroSection = () => {
  const changeBackgroundColor = () => {
    const button = document.getElementsByClassName("secbtn")[0];
    button.style.backgroundColor = "#5E503F";
    button.style.color = "white";
  };

  return (
    <div className="hero-section p-2 m-auto d-flex">
      <div className="left-section w-50 me-4">
        <img className="img-fluid h-100" src={heroImage} alt="Hero" />
      </div>
      <div className="right-section w-50 d-flex flex-column justify-content-center p-2">
        <div className="title">How does Reddit work?</div>
        <p>
          Every day, millions of people around the world post, vote, and comment
          in communities organized around their interests.
        </p>
        <button className="secbtn rounded-pill" onClick={changeBackgroundColor}>
          Visit Reddit
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
