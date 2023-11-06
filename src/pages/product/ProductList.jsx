import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
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
      <Grid container spacing={2}>
        {product.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={4} lg={3} item>
            <Card
              elevation={5}
              sx={{ maxWidth: "100%", borderRadius: "9px", height: "100%" }}
              onClick={() => {}}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt="green iguana"
                  sx={{ paddingTop: "10px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.category}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: "5px" }}
                  >
                    {product.price}$
                  </Typography>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                  >
                    Details
                  </Button>
                </CardContent>
              </CardActionArea>
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
