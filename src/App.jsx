import { Route, Routes } from "react-router";
import Body from "./components/Body";
import Header from "./components/Header";
import NotFound from "./pages/NotFount";
import RestaurantItem from "./components/RestaurantItem";
import Cart from "./components/Cart";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-black">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurants/:resId" element={<RestaurantItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Body></Body> */}
    </div>
  );
};

export default App;
