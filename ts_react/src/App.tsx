import axios from "axios";
import GetUserApi from "./component/Api/GetUserApi";
import Form from "./component/Form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./component/Practice/Button";
import { CounterProvaider } from "./component/Usecontext/Provaider";

const App = () => {
  return (
    <>
      {/*-------------------- practice-----------------------------*/}
      <CounterProvaider>
        <Button text={6} />
      </CounterProvaider>
      {/* <Button onClick={() => alert("hello")} text="click me again" /> */}
      {/*-------------------- user api -----------------------------*/}
      {/* <GetUserApi title="TypeScript Demo" /> */}

      {/*------------------------ form -----------------------------*/}
      {/* <Form /> */}
    </>
  );
};

export default App;
