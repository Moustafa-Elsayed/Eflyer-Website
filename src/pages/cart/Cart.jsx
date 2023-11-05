import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/productSlice";
const Cart = () => {
  const product = useSelector((state) => state.product);
  console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>cart</h1>
    </div>
  )
}

export default Cart
