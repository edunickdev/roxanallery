import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/pages/HomePage"));

const App: React.FC = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <div className="min-h-screen bg-roxana-bg flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-roxana-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
