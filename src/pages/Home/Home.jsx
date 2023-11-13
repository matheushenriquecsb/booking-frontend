import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <h1 className="homeTitle">Destinos mais procurados</h1>
      </div>
    </div>
  );
};

export default Home;
