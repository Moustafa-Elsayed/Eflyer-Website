import React from "react";
import "./productdetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import "./productlist.css";
import Container from "@mui/material/Container";
const ProductDetails = () => {
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    // setLoading(true)
    axios.get(`${url}/${params.id}`).then((res) => {
      // setLoading(false)
      setData(res?.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <div className="content">
        <Grid xs={12} md={6} item>
          <img src={data.image} alt="" className="img-details" />
        </Grid>

        <Grid xs={12} md={6} item>
          <div className="card-content">
            <h1>{data.category}</h1>
            <h2>{data.title}</h2>
            <h3>{data.price} $</h3>
            <p>{data.description}</p>
          </div>
        </Grid>
      </div>
    </Container>
  );
};

export default ProductDetails;
