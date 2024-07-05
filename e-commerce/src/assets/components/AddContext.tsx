import { createContext, useContext, useEffect, useState } from "react";
import { Productdata } from "../pages/Product";

interface ChildrenProps {
  children: React.ReactNode;
}

interface CounterContextValue {
  value: number;
  total: number;
  setValue: (num: number) => void;
  Addproduct: (index: number, item: Productdata) => void;
  Plusitem: (index: number) => Productdata[];
  RemoveItem: (index: number) => Productdata[];
}

interface Total {
  quantity: number;
  price: number;
}

export const useCounter = () => {
  return useContext(Countercontext);
};

const Countercontext = createContext<CounterContextValue | null>(null);

const AddContext: React.FC<ChildrenProps> = (props) => {
  const [value, setValue] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [refresh, setRefresh] = useState<boolean>(true);
  const refreshToggle = () => setRefresh(!refresh);

  //add item and store in localstorage-----------------------------------------
  const Addproduct = (index: number, item: Productdata) => {
    const existingProducts = JSON.parse(
      localStorage.getItem("productdata") || "[]"
    );

    // Check if the item already exists in the cart using its id
    const productIndex = existingProducts.findIndex(
      (product: Productdata) => product.id === item.id
    );

    if (productIndex !== -1) {
      // Item exists, update the quantity
      existingProducts[productIndex].quantity =
        (existingProducts[productIndex].quantity ?? 0) + 1;
    } else {
      // Item does not exist, add to cart with quantity 1
      const newItem = { ...item, quantity: 1 };
      existingProducts.push(newItem);
    }

    refreshToggle();
    localStorage.setItem("productdata", JSON.stringify(existingProducts));
  };

  const Plusitem = (index: number) => {
    const existingProducts = JSON.parse(
      localStorage.getItem("productdata") || "[]"
    );

    const updatedProducts = existingProducts.map(
      (prod: Productdata, idx: number) => {
        if (idx === index) {
          return { ...prod, quantity: (prod.quantity || 0) + 1 }; // Increment quantity
        }

        return prod;
      }
    );
    localStorage.setItem("productdata", JSON.stringify(updatedProducts));
    setValue(updatedProducts.length);
    CountTotal();
    return updatedProducts; // Return the updated array
  };

  const RemoveItem = (index: number) => {
    const existingProducts = JSON.parse(
      localStorage.getItem("productdata") || "[]"
    );

    const updatedProducts = existingProducts
      .map((prod: Productdata, idx: number) => {
        if (idx === index) {
          const updatedQuantity = (prod.quantity || 0) - 1; // decrement quantity
          if (updatedQuantity <= 0) {
            return null;
          } else {
            return { ...prod, quantity: updatedQuantity };
          }
        }
        return prod;
      })
      .filter(Boolean);

    localStorage.setItem("productdata", JSON.stringify(updatedProducts));
    setValue(updatedProducts.length);
    CountTotal();
    return updatedProducts;
  };

  const CountTotal = (): number => {
    const existingProducts: Total[] = JSON.parse(
      localStorage.getItem("productdata") || "[]"
    );

    const totalvalue = existingProducts.reduce(
      (acc, item: Total) => acc + (item.quantity ?? 0) * item.price,
      0
    );

    setTotal(totalvalue);
    return totalvalue;
  };

  useEffect(() => {
    const existingProducts = JSON.parse(
      localStorage.getItem("productdata") || "[]"
    );
    setValue(existingProducts.length);

    CountTotal();
  }, [refresh, total]);

  return (
    <>
      <Countercontext.Provider
        value={{
          value,
          setValue,
          Addproduct,
          Plusitem,
          RemoveItem,
          total,
        }}
      >
        {props.children}
      </Countercontext.Provider>
    </>
  );
};

export default AddContext;
