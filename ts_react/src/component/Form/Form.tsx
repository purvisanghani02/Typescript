import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>INPUT FORM</h1>
        <form>
          <label>Name : </label>
          <input
            type="text"
            placeholder="enter your name"
            onChange={handlechange}
          />

          <div>{value}</div>
        </form>
      </div>
    </>
  );
};

export default Form;
