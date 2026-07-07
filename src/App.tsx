import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import BlogIndex from "./pages/BlogIndex";
import SingleArticle from "./pages/SingleArticle";
import ProjectDetails from "./pages/ProjectDetails";
import CustomCursor from "./components/CustomCursor";

// A wrapper component to manage smooth page transitions on route changes
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Page 1: Home (How) */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        {/* Page 2: Dedicated Portfolio (Ribbon cylinder with Showreel background) */}
        <Route
          path="/portfolio"
          element={
            <PageWrapper>
              <Portfolio />
            </PageWrapper>
          }
        />

        {/* Page 3: Dynamic Project Details (Trionn split layout with text on left, media on right) */}
        <Route
          path="/project/:id"
          element={
            <PageWrapper>
              <ProjectDetails />
            </PageWrapper>
          }
        />

        {/* Supporting alias paths matching Trionn's work pattern (e.g. /work/reaver-vandal) */}
        <Route
          path="/work/:id"
          element={
            <PageWrapper>
              <ProjectDetails />
            </PageWrapper>
          }
        />

        {/* Page 3: Blog List Index */}
        <Route
          path="/blog"
          element={
            <PageWrapper>
              <BlogIndex />
            </PageWrapper>
          }
        />

        {/* Page 3: Single Dynamic Blog Article */}
        <Route
          path="/blog/:slug"
          element={
            <PageWrapper>
              <SingleArticle />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// Custom motion wrapper with a premium slide-up and fade-in/out transition
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // Custom cinematic cubic-bezier easing
      }}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-black relative">
        {/* Premium analog noise layer */}
        <div className="noise-bg" />

        {/* Magnetic Interactive Cursor */}
        <CustomCursor />

        {/* Shared global layout elements */}
        <Header />

        {/* Screen layout content containing animated transitions */}
        <main className="w-full">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}
