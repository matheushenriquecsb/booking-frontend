/* eslint-disable no-unused-vars */
import { LoadingOutlined } from "@ant-design/icons";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import SearchItem from "../../components/SearchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import {
  Container,
  Item,
  ListResult,
  OptionItem,
  Options,
  SearchContainer,
  Title,
  Wrapper,
} from "./styles.jsx";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options] = useState(location.state.options);

  const { data, loading } = useFetch(
    `https://booking-api.adaptable.app/hotels?city=${destination}`
  );

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <Container>
        <Wrapper>
          <SearchContainer>
            <Title>Search</Title>
            <Item>
              <label htmlFor="destination">Destination</label>
              <input placeholder={destination} type="text" id="destination" />
            </Item>

            <Item>
              <label htmlFor="optionsMin">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(dates[0].startDate, "dd/MM/yyyy")} até ${format(
                  dates[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </Item>
            <Item>
              <label htmlFor="optionsMin">Options</label>
              <Options>
                <OptionItem>
                  <span>
                    Min price <small>per night</small>
                  </span>
                  <input type="number" id="optionsMin" />
                </OptionItem>
                <OptionItem>
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input type="number" id="optionMax" />
                </OptionItem>
                <OptionItem>
                  <span>Adult</span>
                  <input
                    id="adult"
                    type="number"
                    min={1}
                    placeholder={options.adult}
                  />
                </OptionItem>
                <OptionItem>
                  <span>Children</span>
                  <input
                    id="children"
                    type="number"
                    min={0}
                    placeholder={options.children}
                  />
                </OptionItem>
                <OptionItem>
                  <span>Room</span>
                  <input
                    id="room"
                    type="number"
                    min={1}
                    placeholder={options.room}
                  />
                </OptionItem>
              </Options>
            </Item>
            <button>Search</button>
          </SearchContainer>
          <ListResult>
            {loading ? (
              <LoadingOutlined />
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </ListResult>
        </Wrapper>
      </Container>
    </div>
  );
};

export default List;
