import {
  Container,
  MailInputContainer,
  MailSubTitle,
  MailTitle,
} from "./styles";

const MailList = () => {
  return (
    <Container>
      <MailTitle>Economize tempo, economize dinheiro!</MailTitle>
      <MailSubTitle>
        Inscreva-se e enviaremos as melhores ofertas para você
      </MailSubTitle>

      <MailInputContainer>
        <input
          name="email"
          autoComplete="off"
          type="text"
          placeholder="Seu Email:"
        />
        <button>Inscreva-se</button>
      </MailInputContainer>
    </Container>
  );
};

export default MailList;
