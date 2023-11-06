import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/productSlice";
import { addToCart } from "../../redux/cartSlice";

const ProductList = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Typography
        variant="body1"
        color="initial"
        sx={{
          fontWeight: "800",
          fontSize: "35px",
          color: "#343a40",
          textAlign: "center",
          paddingBottom: "30px",
          paddingTop: "30px",
        }}
      >
        Man & Woman Fashion
      </Typography>
      <Grid container spacing={5}>
        {product.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={4} lg={3} item>
            <Card
              elevation={2}
              sx={{
                maxWidth: "100%",
                borderRadius: "9px",
                height: "100%",
                padding: "10px",
              }}
              onClick={() => {}}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ paddingTop: "10px" }}
              >
                {product.category}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginBottom: "5px", color: "#f26522" }}
              >
                {product.price}$
              </Typography>

              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt="green iguana"
                sx={{ paddingTop: "10px" }}
              />
              <CardContent>
                <Button
                  sx={{
                    backgroundColor: "#343a40",
                    color: "white",
                    marginTop: "20px",
                    marginLeft: "10px",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#f26522",
                    },
                  }}
                  size="small"
                  variant="contained"
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                >
                  ADD TO CART
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      )
    </>
  );
};

export default ProductList;
<Button size="small" color="primary" onClick={() => {}}>
  BUY NOW
</Button>;
