import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Economize tempo, economize dinheiro!</h1>
      <span className="mailSubTitle">
        Inscreva-se e enviaremos as melhores ofertas para você
      </span>

      <div className="mailInputContainer">
        <input
          name="email"
          autoComplete="off"
          type="text"
          placeholder="Seu Email:"
          className="mailInput"
        ></input>
        <button className="mailButton">Inscreva-se</button>
      </div>
    </div>
  );
};

export default MailList;
