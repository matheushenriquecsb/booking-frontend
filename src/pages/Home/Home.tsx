import Featured from "../../components/Featured/Featured";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/Navbar/Navbar";
import PropertyList from "../../components/PropertyList/PropertyList";
import { Container, Wrapper, HomeSubtitles } from "./styles";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <Wrapper>
        <HomeSubtitles>Destinos mais procurados</HomeSubtitles>
        <Featured />
        <HomeSubtitles>Procure sua melhor acomodação</HomeSubtitles>
        <PropertyList />
        <HomeSubtitles>Casas e apartamentos que os hóspedes amam</HomeSubtitles>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Home;
