/* eslint-disable no-undef */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/productSlice";
import { addToCart } from "../../redux/cartSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./productlist.css";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the data is loaded
    }, 2000); // Simulating a 2-second delay
  }, []);
  const navigate = useNavigate();
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
          paddingTop: "55px",
        }}
      >
        Man & Woman Fashion
      </Typography>
      {isLoading === true ? (
        <div className="center">
          <div className="dot-spinner">
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
          </div>
        </div>
      ) : (
        <Grid container spacing={5}>
          {product.map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={4} lg={3} item>
              <Card
                elevation={2}
                className="card-hover"
                sx={{
                  maxWidth: "100%",
                  borderRadius: "9px",
                  height: "100%",
                  padding: "10px",
                }}
                onClick={() => {}}
              >
                <div className="overlay">
                  <VisibilityIcon
                    sx={{
                      cursor: "pointer",
                      zIndex: "111",
                    }}
                    onClick={() => {
                      navigate(`/product/${product.id}`);
                    }}
                  />
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    paddingTop: "10px",
                    color: "#343a40",
                    fontWeight: "600",
                  }}
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
                  height="180"
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
                      paddingBottom: "0",

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
                    <div data-tooltip={product.price} className="button">
                      <div className="button-wrapper">
                        <div className="text">ADD TO CART</div>
                        <span className="icon">
                          <svg
                            viewBox="0 0 16 16"
                            className="bi bi-cart2"
                            fill="currentColor"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ProductList;
