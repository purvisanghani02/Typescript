import React, { createContext, useContext, useState } from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

interface CounterContextValue {
  value: number;
  setValue: (num: number) => void;
}

const Countercontext = createContext<CounterContextValue | null>(null);

export const useCounter = () => {
  return useContext(Countercontext);
};

export const CounterProvaider: React.FC<ChildrenProps> = (props) => {
  const [value, setValue] = useState<number>(1);
  return (
    <>
      <Countercontext.Provider
        value={{
          value: value,
          setValue,
        }}
      >
        {props.children}
      </Countercontext.Provider>
    </>
  );
};
