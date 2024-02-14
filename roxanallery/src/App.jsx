import { NextUIProvider } from "@nextui-org/react";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";

const App = () => {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<GalleryPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
};

export default App;
