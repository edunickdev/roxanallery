import { useEffect } from "react";
import { useUIStore } from "@/store/useUIStore";

export const useScrollNavigation = () => {
  const setNavScrolled = useUIStore((s) => s.setNavScrolled);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setNavScrolled]);
};
