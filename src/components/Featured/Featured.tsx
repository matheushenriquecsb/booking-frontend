import useFetch, { apiURL } from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import { Container, FeaturedImg, FeaturedItem, FeaturedTitle } from "./styles";

const Featured = () => {
  const { data, loading } = useFetch(
    `${apiURL}/hotels/countByCity?cities=Salvador,Gramado,Rio de Janeiro`
  );

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FeaturedItem>
            <FeaturedImg
              src="https://www.costadosauipe.com.br/images/news/0473/elevador-lacerda-salavdor.jpg"
              alt="Imagem Salvador"
            />
            <FeaturedTitle>
              <h1>Salvador</h1>
              <h2>{data[0]} Propriedades</h2>
            </FeaturedTitle>
          </FeaturedItem>

          <FeaturedItem>
            <FeaturedImg
              src="https://www.viagensmontreal.com/blog/wp-content/uploads/2022/02/o-que-fazer-em-gramado-e-canela.jpg"
              alt="Imagem Gramado"
            />
            <FeaturedTitle>
              <h1>Gramado</h1>
              <h2>{data[1]} Propriedades</h2>
            </FeaturedTitle>
          </FeaturedItem>
          <FeaturedItem>
            <FeaturedImg
              src="https://jpimg.com.br/uploads/2023/05/turismo-no-rio-de-janeiro-veja-o-que-visitar-na-cidade-maravilhosa.jpg"
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
