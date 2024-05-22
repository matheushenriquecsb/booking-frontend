import { LoadingOutlined } from "@ant-design/icons";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    `${import.meta.env.VITE_API_URL}/hotels/featured?featured=true&limit=4`
  );

  return (
    <div className="fp">
      {loading ? (
        <LoadingOutlined />
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="Image Hotel" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                A partir de <b>${item.cheapestPrice}</b>
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excelente</span>
                  <span className="fpAvaliation">72 Avaliações</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
