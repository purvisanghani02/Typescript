import React, { ChangeEvent, useState } from "react";
import { useCounter } from "../Usecontext/Provaider";

interface MyPuttonProps {
  text: string | number;
  onClick?: () => void;
  somthing?: boolean;
}

interface Book {
  name: string;
  price: number;
}

const Button: React.FC<MyPuttonProps> = ({ text, onClick }) => {
  // const [value, setValue] = useState<Book>({
  //   name: "one",
  //   price: 234,
  // });

  // const [inputvalue, setInputValue] = useState<string | undefined>();
  // const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };

  const context = useCounter();
  return (
    <>
      {/* <div>
        name:{value.name} price:{value.price}{" "}
      </div>
      <button
        onClick={() => {
          setValue({ name: "two", price: 345 });
        }}
      >
        click me
      </button>
      <button onClick={onClick}>{text}</button>
      <br />

      <input
        onChange={handlechange}
        type="text"
        placeholder="enter your name"
        value={inputvalue}
      />

      <div>{inputvalue}</div> */}

      <h1 onClick={(e) => context?.setValue(context?.value + 1)}>
        {context?.value}
      </h1>
    </>
  );
};

export default Button;
