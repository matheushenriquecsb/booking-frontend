import Featured from "../../components/Featured/Featured";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/Navbar/Navbar";
import PropertyList from "../../components/PropertyList/PropertyList";
import { Container, HomeSubtitles } from "./styles";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Container>
        <HomeSubtitles>Destinos mais procurados</HomeSubtitles>
        <Featured />
        <HomeSubtitles>Procure sua melhor acomodação</HomeSubtitles>
        <PropertyList />
        <HomeSubtitles>Casas e apartamentos que os hóspedes amam</HomeSubtitles>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
