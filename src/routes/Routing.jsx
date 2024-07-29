import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Singlepost from "../pages/single-post/Singlepost";
import Category from "../pages/categories/Category";
const Routing = () => {
  return (
    <div className="container container-view">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Singlepost />}></Route>
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
    </div>
  );
};

export default Routing;
