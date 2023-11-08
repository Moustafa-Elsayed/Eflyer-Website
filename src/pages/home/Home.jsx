import React from "react";
import ProductList from "../product/ProductList";
import Container from "@mui/material/Container";
import Textswiper from "../../components/header/Textswiper";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Textswiper />
      <Container maxWidth="lg">
        <ProductList />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
