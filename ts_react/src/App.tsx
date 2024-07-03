import axios from "axios";
import GetUserApi from "./component/Api/GetUserApi";
import Form from "./component/Form/Form";

const App = () => {
  return (
    <>
      {/*-------------------- user api -----------------------------*/}
      {/* <GetUserApi title="TypeScript Demo" /> */}

      {/*------------------------ form -----------------------------*/}
      <Form />
    </>
  );
};

export default App;
