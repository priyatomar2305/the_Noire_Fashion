import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
