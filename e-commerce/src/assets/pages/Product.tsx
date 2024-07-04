import React, { useEffect, useState } from "react";
import CustomCard from "../components/CustomCard";
import axios from "axios";

export interface Productdata {
  title: string;
  description: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
}

const Product = () => {
  const [Productdata, setProductdata] = useState<Productdata[]>([]);

  useEffect(() => {
    const GetProductData = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        console.log("data", data);
        setProductdata(data);
      } catch (error) {
        console.log(error);
      }
    };

    GetProductData();
  }, []);

  return (
    <>
      <CustomCard Productdata={Productdata} />
    </>
  );
};

export default Product;
