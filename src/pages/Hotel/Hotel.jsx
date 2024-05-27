/* eslint-disable no-unused-vars */
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/Navbar/Navbar";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import {
  Container,
  HotelDetails,
  DetailsTexts,
  Description,
  DetailsPrice,
  HotelImages,
  ImgWrapper,
  HotelImg,
  HotelWrapper,
  BookNow,
  Title,
  Address,
  Distance,
  SliderWrapper,
  PriceHighlight,
  Slider,
  Close,
} from "./styles.jsx";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { dates } = useContext(SearchContext);

  const { data, loading } = useFetch(
    `https://booking-api.adaptable.app/hotels/find/${id}`
  );

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {open && (
            <Slider>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <SliderWrapper>
                <img src={data.photos[slideNumber]?.src} alt="Hotel Image" />
              </SliderWrapper>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </Slider>
          )}
          <HotelWrapper>
            <BookNow id="bookNow">Reserve agora!</BookNow>
            <Title>{data.name}</Title>
            <Address>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </Address>
            <Distance>
              Excelente localização – {data.distance}m do centro
            </Distance>
            <PriceHighlight>
              Reserve uma estadia acima de R$ {data.cheapestPrice} nesta
              propriedade e ganhe um táxi gratuito do aeroporto
            </PriceHighlight>
            <HotelImages>
              {data.photos?.map((photo, i) => (
                <ImgWrapper key={i}>
                  <HotelImg
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt="Hotel Image"
                  />
                </ImgWrapper>
              ))}
            </HotelImages>
            <HotelDetails>
              <DetailsTexts>
                <Description>{data.desc}</Description>
              </DetailsTexts>
              <DetailsPrice>
                <h1>Perfeito para uma estadia de {days} noites!</h1>
                <span>
                  Localizada no verdadeiro coração da cidade, esta propriedade
                  tem um excelente pontuação de localização de
                  {data.rating}!
                </span>
                <h2>
                  <b>R$ {days * data.cheapestPrice}</b> ({days} noites)
                </h2>
                <button>Reserve agora!</button>
              </DetailsPrice>
            </HotelDetails>
          </HotelWrapper>
          <MailList />
          <Footer />
        </Container>
      )}
    </div>
  );
};

export default Hotel;
