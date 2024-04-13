import { Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./Context/ShopContext";
import Header from "./components/Header/Header";
// import SingelProductPage from "./Pages/SingelProduct/SingelProduct";
import Home from "./Pages/Home/Home";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
// import Cart from "./Pages/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="product" element={<SingelProductPage />}>
            <Route path=":productId" element={<SingelProductPage />} />
          </Route> */}
          <Route path="shoes" element={<ShopCategory category="shoes" />} />
          <Route path="tops" element={<ShopCategory category="tops" />} />
          <Route
            path="accesory"
            element={<ShopCategory category="accesory" />}
          />
          <Route path="BOTTOMS" element={<ShopCategory category="BOTTOMS" />} />
          <Route path="OUTER" element={<ShopCategory category="OUTER" />} />

          {/* <Route path="cart" element={<Cart />} /> */}
        </Routes>
        {/* <Footer /> */}
      </ShopContextProvider>
    </div>
  );
}

export default App;
