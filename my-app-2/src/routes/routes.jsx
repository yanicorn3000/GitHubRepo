import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/notfound/NotFound";
import { Favourites } from "./pages/favourites/Favourites";
import { RepoDetails } from "./pages/details/RepoDetails";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/favourites" Component={Favourites} />
      <Route path="/repositories/:repoId" Component={RepoDetails} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
