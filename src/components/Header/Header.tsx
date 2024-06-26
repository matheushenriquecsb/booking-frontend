/* eslint-disable react/prop-types */
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import {
  Container,
  DatePicker,
  HeaderButton,
  HeaderDescription,
  HeaderIcon,
  HeaderList,
  HeaderListItem,
  HeaderSearch,
  HeaderSearchInput,
  HeaderSearchItem,
  HeaderSearchText,
  OptionCounter,
  OptionCounterButton,
  OptionItem,
  Options,
  HeaderContainer,
} from "./styles";

const Header = ({ type }: any) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name: string, operation: string) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const { dispatch }: any = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <Container>
      <HeaderContainer type={type}>
        <HeaderList>
          <HeaderListItem>
            <FontAwesomeIcon icon={faBed} />
            <span>Hospedagens</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faPlane} />
            <span>Voos</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faCar} />
            <span>Aluguel de Carros</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faBed} />
            <span>Atrações</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxis</span>
          </HeaderListItem>
        </HeaderList>
        {type !== "list" && (
          <>
            <h1>Encontre sua próxima estadia</h1>
            <HeaderDescription>
              Encontre ofertas em hotéis, casas, apartamentos e muito mais...
            </HeaderDescription>
            {!user && (
              <Link to="signup">
                <HeaderButton>Cadastre-se / Entre</HeaderButton>
              </Link>
            )}
            <HeaderSearch>
              <HeaderSearchItem>
                <HeaderIcon>
                  <FontAwesomeIcon icon={faBed} />
                </HeaderIcon>

                <HeaderSearchInput
                  id="city"
                  type="text"
                  placeholder="Para onde você vai?"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </HeaderSearchItem>
              <HeaderSearchItem>
                <HeaderIcon>
                  <FontAwesomeIcon icon={faCalendarDays} />
                </HeaderIcon>

                <HeaderSearchText
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(dates[0].startDate, "dd/MM/yyyy")} até ${format(
                  dates[0].endDate,
                  "dd/MM/yyyy"
                )}`}</HeaderSearchText>
                {openDate && (
                  <DatePicker>
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      minDate={new Date()}
                    />
                  </DatePicker>
                )}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <HeaderIcon>
                  <FontAwesomeIcon icon={faPerson} />
                </HeaderIcon>
                <HeaderSearchText onClick={() => setOpenOptions(!openOptions)}>
                  {`${options.adult} adultos · ${options.children} crianças · ${options.room} quartos`}
                </HeaderSearchText>
                {openOptions && (
                  <Options>
                    <OptionItem>
                      <span>Adulto</span>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <span>{options.adult}</span>
                        <OptionCounterButton
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                    <OptionItem>
                      <span>Criança</span>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <span>{options.children}</span>
                        <OptionCounterButton
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                    <OptionItem>
                      <span>Quartos</span>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <span>{options.room}</span>
                        <OptionCounterButton
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                  </Options>
                )}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <HeaderButton onClick={handleSearch}>Pesquisar</HeaderButton>
              </HeaderSearchItem>
            </HeaderSearch>
          </>
        )}
      </HeaderContainer>
    </Container>
  );
};

export default Header;
