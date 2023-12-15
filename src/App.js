import { Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./Context/ShopContext";
import Header from "./components/Header/Header";
import SingelProductPage from "./Pages/SingelProduct/SingelProduct";
import Home from "./Pages/Home/Home";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
import Cart from "./Pages/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<SingelProductPage />}>
            <Route path=":productId" element={<SingelProductPage />} />
          </Route>
          <Route path="shoes" element={<ShopCategory category="shoes" />} />
          <Route path="t-shirt" element={<ShopCategory category="t-shirt" />} />
          <Route path="hoodies" element={<ShopCategory category="hoodies" />} />
          <Route path="pants" element={<ShopCategory category="pants" />} />
          <Route path="jackets" element={<ShopCategory category="jackets" />} />

          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
