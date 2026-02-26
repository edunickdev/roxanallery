import { Navbar } from "@/organisms/Navbar";
import { HeroSection } from "@/organisms/HeroSection";
import { ProjectGrid } from "@/organisms/ProjectGrid";
import { AboutSection } from "@/organisms/AboutSection";
import { ContactSection } from "@/organisms/ContactSection";
import { Footer } from "@/organisms/Footer";
import { ProjectDetail } from "@/organisms/ProjectDetail";

export const HomeTemplate: React.FC = () => (
  <div className="min-h-screen bg-roxana-bg text-white">
    <Navbar />
    <main>
      <HeroSection />
      <ProjectGrid />
      <AboutSection />
      <ContactSection />
    </main>
    <Footer />
    {/* Global modal – lives at template level so it overlays everything */}
    <ProjectDetail />
  </div>
);
