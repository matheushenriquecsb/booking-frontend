/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <Link to={`/hotels/${item._id}`}>
        <img src={item.photos[0]} alt="Hotel Image" className="siImg" />
      </Link>
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m do centro</span>
        <span className="siTaxiOp">Táxi gratuito do aeroporto</span>
        <span className="siSubtitle">Quartos com ar-condicionado</span>
        <span className="siFeatures">
          1 Quarto • 1 Suíte • 21m² 1 Cama King
        </span>
        <span className="siCancelOp">Cancelamento gratuito</span>
        <span className="siCancelOpSubtitle">
          Você pode cancelar mais tarde, então garanta esse ótimo preço hoje
          mesmo!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{item.title}</span>
          <button>{item.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">R$ {item.cheapestPrice}</span>
          <span className="siTaxOp">Inclui impostos e taxas</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Ver disponibilidade</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
