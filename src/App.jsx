import Navbar from "./components/Navbar";
import "./components/global.css";
import style from "./components/Navbar.module.css";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar NavbarStyle={style} />
        <div className="container">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
