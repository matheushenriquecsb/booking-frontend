import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import { Container, FeaturedImg, FeaturedItem, FeaturedTitle } from "./styles";

const Featured = () => {
  const { data, loading } = useFetch(
    `https://booking-api.adaptable.app/hotels/countByCity?cities=Salvador,Gramado,Rio de Janeiro`
  );

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FeaturedItem>
            <FeaturedImg
              src="https://revistaazul.voeazul.com.br/wp-content/uploads/2023/03/conheca-salvador-e-se-apaixone-pela-capital-baiana.jpeg"
              alt="Imagem Salvador"
            />
            <FeaturedTitle>
              <h1>Salvador</h1>
              <h2>{data[0]} Propriedades</h2>
            </FeaturedTitle>
          </FeaturedItem>

          <FeaturedItem>
            <FeaturedImg
              src="https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/03/Gramado-divulgacao.jpg?w=1200&h=1200&crop=1"
              alt="Imagem Gramado"
            />
            <FeaturedTitle>
              <h1>Gramado</h1>
              <h2>{data[1]} Propriedades</h2>
            </FeaturedTitle>
          </FeaturedItem>
          <FeaturedItem>
            <FeaturedImg
              src="https://emcasa.com/blog/wp-content/uploads/2022/06/eelco-bohtlingk-dPYmxwKLGOI-unsplash.jpg"
              alt="Imagem Rio de Janeiro"
            />
            <FeaturedTitle>
              <h1>Rio de Janeiro</h1>
              <h2>{data[2]} Propriedades</h2>
            </FeaturedTitle>
          </FeaturedItem>
        </>
      )}
    </Container>
  );
};

export default Featured;
