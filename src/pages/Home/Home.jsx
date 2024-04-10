import Featured from "../../components/Featured/Featured";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
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
        <h1 className="homeTitle">Casas e apartamentos que os hóspedes amam</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
