import study from "../assets/images/study.jpg";
import HeroStyle from "./Hero.module.css";

function Hero() {
  return (
    <div className={HeroStyle.HeroContainer}>
      <img src={study} alt="study" height={400} />
      <HeroDescription />
    </div>
  );
}

const HeroDescription = () => {
  return (
    <div className="d-flex flex-column">
      <h2>Welcome To [School Name]</h2>
      <h2>Enrollment System!</h2>
      <p className="text-capitalize">
        Your Journey To Success starts here. our platform makes registration
        quick and easy. enroll in our offfered programs and keep tracked of your
        enrollment records-all in one place.
      </p>
      <p>Let's make this the best school year. welcome aboard!</p>
      <button className={HeroStyle["enroll-button"]}>How To Enroll?</button>
    </div>
  );
};

export default Hero;
