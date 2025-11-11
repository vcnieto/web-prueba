import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Services from "@/components/Services";

const queryClient = new QueryClient();

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-24">
          <Services />
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const ScrollAndRevealHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // slight delay to ensure DOM is ready after route change
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.12,
      rootMargin: "0px 0px -10% 0px",
    });
    elements.forEach((el) => observer.observe(el));

    // Intro animation (stagger) solo una vez por sesión
    if (!sessionStorage.getItem("introPlayed")) {
      const introEls = Array.from(document.querySelectorAll<HTMLElement>(".intro"));
      introEls.forEach((el, idx) => {
        // asegurar estado inicial
        el.classList.add("reveal");
        setTimeout(() => {
          el.classList.add("reveal-visible");
        }, 150 + idx * 120);
      });
      sessionStorage.setItem("introPlayed", "1");
    }

    return () => observer.disconnect();
  });

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollAndRevealHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<ServicesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
