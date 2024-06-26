import {
  Container,
  FooterLists,
  FooterList,
  FooterListItem,
  FooterText,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <FooterLists>
        <FooterList>
          <FooterListItem>Países</FooterListItem>
          <FooterListItem>Regiões</FooterListItem>
          <FooterListItem>Cidades</FooterListItem>
          <FooterListItem>Distritos</FooterListItem>
          <FooterListItem>Aeroportos</FooterListItem>
          <FooterListItem>Hotels</FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>Casas </FooterListItem>
          <FooterListItem>Apartmentos </FooterListItem>
          <FooterListItem>Resorts </FooterListItem>
          <FooterListItem>Villas</FooterListItem>
          <FooterListItem>Hostels</FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>Lugares únicos para ficar </FooterListItem>
          <FooterListItem>Todos os destinos</FooterListItem>
          <FooterListItem>Todos os destinos de voos </FooterListItem>
          <FooterListItem>Conheça as estadias mensais </FooterListItem>
          <FooterListItem>Ofertas sazonais e de viagem </FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>Aluguel de Carros</FooterListItem>
          <FooterListItem>Pesquisa de voos</FooterListItem>
          <FooterListItem>Reservas de restaurantes </FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>Sobre a Booking.com</FooterListItem>
          <FooterListItem>Contato corporativos</FooterListItem>
          <FooterListItem>Careers</FooterListItem>
          <FooterListItem>Avaliações</FooterListItem>
          <FooterListItem>Como trabalhamos</FooterListItem>
          <FooterListItem>Central de Ajuda ao Parceiro</FooterListItem>
          <FooterListItem>Serviço de Apoio ao Cliente</FooterListItem>
          <FooterListItem>Termos e Condições</FooterListItem>
        </FooterList>
      </FooterLists>
      <FooterText>
        Copyright © 1996–2023 Booking.com™. All rights reserved.
      </FooterText>
    </Container>
  );
};

export default Footer;
