import { FC, useState } from "react";
import User from "./User";
import axios from "axios";
interface AppProp {
  title: string;
}

export interface Name {
  first: string;
  last: string;
}

export interface Login {
  uuid: string;
}

export interface Users {
  name: Name;
  login: Login;
  email: string;
}

const GetUserApi: FC<AppProp> = ({ title }) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [loding, setLoding] = useState(true);

  const handleclick = async () => {
    try {
      setLoding(false);
      setTimeout(async () => {
        const { data } = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        console.log("data", data);
        setUsers(data.results);
        setLoding(true);
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoding(false);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <button onClick={handleclick}>Show users</button>
      <ul>
        {!loding ? (
          <h1 style={{ textAlign: "center" }}>loding</h1>
        ) : (
          users.map(({ login, name, email }) => {
            return <User key={login.uuid} name={name} email={email} />;
          })
        )}
      </ul>
    </>
  );
};

export default GetUserApi;
