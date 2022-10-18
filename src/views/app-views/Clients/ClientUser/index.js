import React from "react";
import style from "./index.module.css";
import { useParams, useHistory } from "react-router-dom";
import Loading from "components/shared-components/Loading";

function ClientUser() {
  const { id, name, email, phone, website } = useParams();

  const [names, setName] = React.useState(name);
  const [mail, setEmail] = React.useState(email);
  const [phons, setPhone] = React.useState(phone);
  const [websit, setWebsite] = React.useState(website);

  const [isLoading, setIsLoading] = React.useState(false);
  const history = useHistory();

  function redirect() {
    setIsLoading(false);
    history.push("/app/home/default/clients/list");
  }

  function saveChanges() {
    setIsLoading(true);
    setTimeout(() => redirect(), 1000);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div key={id} className={style.userInfo}>
          <h3>Имя</h3>
          <input
            className={style.input}
            value={names}
            onChange={(e) => setName(e.target.value)}
          />
          <h3>Эл.почта</h3>
          <input
            className={style.input}
            value={mail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>Номер телефона</h3>
          <input
            className={style.input}
            value={phons}
            onChange={(e) => setPhone(e.target.value)}
          />
          <h3>Веб сайт</h3>
          <input
            className={style.input}
            value={websit}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <button onClick={() => saveChanges()}>Сохранить изменения</button>
        </div>
      )}
    </>
  );
}

export default ClientUser;
