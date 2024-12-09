import Navbar from "./components/Navbar";
import "./components/global.css";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          <div className="container d-flex align-items-center justify-content-center">
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
