import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/notfound/NotFound";
import { Favourites } from "./pages/Favourites";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/favourites" Component={Favourites} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    //  - Widok szczegółowy (`/favourites/:id`),
  );
};

export default RoutesComponent;
