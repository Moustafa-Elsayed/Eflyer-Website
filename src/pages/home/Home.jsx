import React from "react";
import ProductList from "../product/ProductList";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <ProductList />
    </Container>
  );
};

export default Home;
