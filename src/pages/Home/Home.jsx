import Featured from "../../components/Featured/Featured";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import PropertyList from "../../components/PropertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <h1 className="homeTitle">Destinos mais procurados</h1>
        <Featured />
        <h1 className="homeTitle">Procure sua melhor acomodação</h1>
        <PropertyList />
      </div>
    </div>
  );
};

export default Home;
