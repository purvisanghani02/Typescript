import { createContext, useContext, useState } from "react";
import { Productdata } from "../pages/Product";
import { log } from "console";

interface ChildrenProps {
  children: React.ReactNode;
}

interface CounterContextValue {
  value: number;
  setValue: (num: number) => void;
  Addproduct: (num: number, item: Productdata) => void;
}

export const useCounter = () => {
  return useContext(Countercontext);
};

const Countercontext = createContext<CounterContextValue | null>(null);

const AddContext: React.FC<ChildrenProps> = (props) => {
  const [value, setValue] = useState<number>(0);

  const Addproduct = (index: number, item: Productdata) => {
    localStorage.setItem("productdata", JSON.stringify([item]));
    console.log("item", item);

    console.log("index", index);
    setValue(value + 1);
  };
  return (
    <>
      <Countercontext.Provider
        value={{
          value,
          setValue,
          Addproduct,
        }}
      >
        {props.children}
      </Countercontext.Provider>
    </>
  );
};

export default AddContext;
