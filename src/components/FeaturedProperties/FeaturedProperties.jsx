import useFetch from "../../hooks/useFetch";
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
  const { data, loading } = useFetch(
    `https://booking-api.adaptable.app/hotels/featured?featured=true&limit=4`
  );

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          {data.map((item) => (
            <Property key={item._id}>
              <PropertyImg src={item.photos[0]} alt="Image Hotel" />
              <PropertyName>{item.name}</PropertyName>
              <PropertyCity>{item.city}</PropertyCity>
              <PropertyPrice>
                A partir de <b>${item.cheapestPrice}</b>
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
