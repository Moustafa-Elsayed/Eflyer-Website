import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/productSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { clear, deleteFromCart } from "../../redux/cartSlice";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Cart = () => {
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);

  console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <Container maxWidth="lg" sx={{ marginTop: "150px", Width: "100%" }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: "10px" }}
        onClick={() => {
          dispatch(clear());
        }}
      >
        CLEAR
      </Button>
      <Typography variant="h5" color="initial">
        Total Price:{totalPrice.toFixed(2)} $
      </Typography>
      {cart.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Imgage</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">quintity</TableCell>

                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((product) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={product.id}
                >
                  <TableCell component="th" scope="row">
                    {product.id}
                  </TableCell>
                  <TableCell align="left">{product.title}</TableCell>
                  <TableCell align="left">
                    <img width="30px" src={product.image} alt="" />
                  </TableCell>
                  <TableCell align="left">{product.price}</TableCell>
                  <TableCell align="left">{product.quantity}</TableCell>

                  <TableCell align="left">
                    <Button
                      variant="text"
                      color="primary"
                      onClick={() => {
                        dispatch(deleteFromCart(product));
                      }}
                    >
                      <DeleteForeverIcon sx={{ color: "red" }} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Alert severity="info" sx={{maxWidth:"550" ,justifyContent: "center",padding:"20px",marginTop:"20px"}}>
          
          No product in your cart — <strong>check it out!</strong>
        </Alert>
      )}
    </Container>
  );
};

export default Cart;
