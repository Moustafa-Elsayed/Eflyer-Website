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
  console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid container spacing={0}>
      <Grid item>
        {product.map((product) => (
          <Card sx={{ maxWidth: 345 }} key={product.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>{
                dispatch(addToCart(product))
              }}>
                BUY NOW
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProductList;
