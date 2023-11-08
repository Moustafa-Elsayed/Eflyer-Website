import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/root/Root";
import Home from "./pages/home/Home";
import Notfound from "./pages/notfound/Notfound";
import Cart from "./pages/cart/Cart";
import ProductList from "./pages/product/ProductList";
import ProductDetails from "./pages/product/ProductDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product" element={<ProductList />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
