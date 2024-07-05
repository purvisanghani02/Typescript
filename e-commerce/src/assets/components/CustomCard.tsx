import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { Productdata } from "../pages/Product";
import StarIcon from "@mui/icons-material/Star";
import { useCounter } from "./AddContext";

interface CardData {
  Productdata: Productdata[];
}

const CustomCard: React.FC<CardData> = ({ Productdata }) => {
  // console.log("Productdata---", Productdata);

  const context = useCounter();

  const Addproductitem = (item: Productdata, index: number) => {
    context?.Addproduct(index, item);
  };

  return (
    <>
      <Container style={{ marginTop: "70px" }} maxWidth="xl">
        <Grid container spacing={3}>
          {Productdata?.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <Card sx={{ maxWidth: 330, marginTop: "20px" }}>
                <CardMedia
                  sx={{ height: 350 }}
                  image={item.image}
                  title="product image"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "26px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    $ {item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => Addproductitem(item, index)}
                  >
                    Add to cart
                  </Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CustomCard;
// context?.setValue(context?.value + 1)
