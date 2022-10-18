import { Table, Column } from "antd";
import axios from "axios";
import Loading from "components/shared-components/Loading";
import UserTable from "components/shared-components/UserTable";
import React from "react";

import style from "./index.module.css";

function ClientList() {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    (async function getUsers() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUser(response.data);
    })();
  }, []);

  console.log(user);

  return (
    <>
      {user.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <div className={style.title_table}>
            <h2>Name</h2>
            <h2>Email</h2>
            <h2>Phone</h2>
            <h2>Website</h2>
          </div>

          {user.map((item) => (
            <UserTable
              key={item.id}
              id={item.id}
              name={item.name}
              email={item.email}
              phone={item.phone}
              website={item.website}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ClientList;
