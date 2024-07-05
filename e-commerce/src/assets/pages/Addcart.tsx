import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./CartItem.css";
import { Productdata } from "./Product";
import { useCounter } from "../components/AddContext";

const Addcart = () => {
  const context = useCounter();

  const [Data, setData] = useState<Productdata[]>([]);

  useEffect(() => {
    const existingProducts = JSON.parse(
      localStorage.getItem("productdata") || "[]"
    );
    setData(existingProducts);
  }, []);

  const addToCart = (index: number) => {
    const updatedProducts = context?.Plusitem(index);
    if (updatedProducts) {
      setData(updatedProducts);
    }
  };

  const removeFromCart = (index: number) => {
    const Updateremove = context?.RemoveItem(index);
    if (Updateremove) {
      setData(Updateremove);
    }
  };

  return (
    <>
      <Container style={{ marginTop: "70px" }} maxWidth="md">
        {Data?.length === 0 ? <p>No items in cart.</p> : null}
        {Data?.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                borderBottom: "1px solid lightblue",
                paddingBottom: "15px",
                paddingTop: "15px",
              }}
            >
              <Typography
                gutterBottom
                component="div"
                sx={{
                  flex: 1,
                }}
              >
                <h3>{item.title}</h3>
                <div className="information">
                  <p>Price: ${item.price}</p>
                  <p>
                    Total: ${((item?.quantity ?? 0) * item.price).toFixed(2)}
                  </p>
                </div>
                <div className="buttons">
                  <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => removeFromCart(index)}
                  >
                    -
                  </Button>
                  <p>{item.quantity}</p>
                  <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => addToCart(index)}
                  >
                    +
                  </Button>
                </div>
              </Typography>
              <img src={item.image} alt={item.title} />
            </Box>
          );
        })}
        <h2>Total : {context?.total} </h2>
      </Container>
    </>
  );
};

export default Addcart;
