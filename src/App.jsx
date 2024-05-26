import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./routes/homepage/Homepage";
import Like from "./routes/like/Like";
import Cart from "./routes/cart/Cart";
import Powder from "./routes/powder/Powder";
import Cream from "./routes/cream/Cream";
import Pencil from "./routes/pencil/Pencil";
import Palette from "./routes/palette/Palette";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/wishlist" element={<Like />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/powder" element={<Powder />} />
        <Route path="/cream" element={<Cream />} />
        <Route path="/pencil" element={<Pencil />} />
        <Route path="/palette" element={<Palette />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
