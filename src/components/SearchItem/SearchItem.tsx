import { Link } from "react-router-dom";
import {
  SearchContainer,
  Description,
  Title,
  Distance,
  Taxi,
  Subtitle,
  Features,
  Cancel,
  CancelSubtitle,
  Details,
  Rating,
  DetailTexts,
  Price,
  TaxOp,
  CheckButton,
  Image,
} from "./styles";

const SearchItem = ({ item }: any) => {
  return (
    <SearchContainer>
      <Link to={`/hotels/${item._id}`}>
        <Image src={item.photos[0]} alt="Hotel Image" />
      </Link>
      <Description>
        <Title>{item.name}</Title>
        <Distance>{item.distance}m do centro</Distance>
        <Taxi>Táxi gratuito do aeroporto</Taxi>
        <Subtitle>Quartos com ar-condicionado</Subtitle>
        <Features>1 Quarto • 1 Suíte • 21m² 1 Cama King</Features>
        <Cancel>Cancelamento gratuito</Cancel>
        <CancelSubtitle>
          Você pode cancelar mais tarde, então garanta esse ótimo preço hoje
          mesmo!
        </CancelSubtitle>
      </Description>
      <Details>
        <Rating>
          <span>{item.title}</span>
          <button>{item.rating}</button>
        </Rating>
        <DetailTexts>
          <Price>R$ {item.cheapestPrice}</Price>
          <TaxOp>Inclui impostos e taxas</TaxOp>
          <Link to={`/hotels/${item._id}`}>
            <CheckButton>Ver disponibilidade</CheckButton>
          </Link>
        </DetailTexts>
      </Details>
    </SearchContainer>
  );
};

export default SearchItem;
