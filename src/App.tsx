import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useThemeStore } from "@/store/useThemeStore";

const HomePage = lazy(() => import("@/pages/HomePage"));

const App: React.FC = () => {
  // Initialize theme on mount (applies stored preference)
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme]);

  return (
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
};

export default App;
