import study from "../assets/images/study.jpg";

function Hero() {
  return (
    <>
      <img src={study} alt="study" height={400} />
      <HeroDescription />
    </>
  );
}

const HeroDescription = () => {
  return (
    <div className="d-flex flex-column">
      <h1>Welcome To [School Name]</h1>
      <h1>Enrollment System!</h1>
      <p>
        Your Journey To Success starts here. our platform makes registration
        quick and easy. enroll in our offeref programs and keep tracked of your
        enrollment records-all inone place
      </p>
      <button>How To Enroll?</button>
    </div>
  );
};

export default Hero;
