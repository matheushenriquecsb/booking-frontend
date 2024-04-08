import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "https://real-cyan-lemming-toga.cyclic.app/hotels/countByCity?cities=Salvador,Gramado,rio de janeiro"
  );

  console.log(data, error);

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://revistaazul.voeazul.com.br/wp-content/uploads/2023/03/conheca-salvador-e-se-apaixone-pela-capital-baiana.jpeg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Salvador</h1>
              <h2>{data[0]} Propriedades</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/03/Gramado-divulgacao.jpg?w=1200&h=1200&crop=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Gramado</h1>
              <h2>{data[1]} Propriedades</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://emcasa.com/blog/wp-content/uploads/2022/06/eelco-bohtlingk-dPYmxwKLGOI-unsplash.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Rio de Janeiro</h1>
              <h2>{data[2]} Propriedades</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
