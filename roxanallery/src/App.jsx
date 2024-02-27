import { NextUIProvider } from "@nextui-org/react";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import PhotosPage from "./pages/PhotosPage";
import DrawPage from "./pages/DrawPage";
import DesignPage from "./pages/DesignPage";

const App = () => {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<GalleryPage />} />
          <Route path="projects/fotos" element={<PhotosPage />} />
          <Route path="projects/dibujo" element={<DrawPage />} />
          <Route path="projects/diseño" element={<DesignPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
};

export default App;
