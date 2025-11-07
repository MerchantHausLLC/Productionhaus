import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Vamp from "./pages/Vamp";
import ThreeDS from "./pages/ThreeDS";
import ThreeDS2 from "./pages/ThreeDS2";
import AboutPage from "./pages/AboutPage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Apply from "./pages/Apply";
import Security from "./pages/Security";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import Quote from "./pages/Quote";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/vamp" element={<Vamp />} />
            <Route path="/3ds" element={<ThreeDS />} />
            <Route path="/3ds2" element={<ThreeDS2 />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/security" element={<Security />} />
            <Route path="/developer-guides" element={<ComingSoon />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
