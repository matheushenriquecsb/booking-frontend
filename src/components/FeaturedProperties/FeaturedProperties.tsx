import useFetch, { apiURL } from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import {
  PropertyAvaliation,
  PropertyCity,
  Container,
  PropertyImg,
  Property,
  PropertyName,
  PropertyPrice,
  PropertyRating,
} from "./styles";

const FeaturedProperties = () => {
  const { data, loading }: any = useFetch(
    `${apiURL}/hotels/featured?featured=true&limit=4`
  );

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          {data.map((item: any) => (
            <Property key={item._id}>
              <PropertyImg src={item.photos[0]} alt="Image Hotel" />
              <PropertyName>{item.name}</PropertyName>
              <PropertyCity>{item.city}</PropertyCity>
              <PropertyPrice>
                A partir de <b>R${item.cheapestPrice}</b>
              </PropertyPrice>
              {item.rating && (
                <PropertyRating>
                  <button>{item.rating}</button>
                  <span>Excelente</span>
                  <PropertyAvaliation>72 Avaliações</PropertyAvaliation>
                </PropertyRating>
              )}
            </Property>
          ))}
        </>
      )}
    </Container>
  );
};

export default FeaturedProperties;
