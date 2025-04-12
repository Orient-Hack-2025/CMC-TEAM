
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Diagnostics from "./pages/Diagnostics";
import RaisecTest from "./pages/RaisecTest";
import RaisecResults from "./pages/RaisecResults";
import AnxietyTest from "./pages/AnxietyTest";
import OceanTest from "./pages/OceanTest";
import TestResults from "./pages/TestResults";
import Careers from "./pages/Careers";
import CareerDetails from "./pages/CareerDetails";
import Education from "./pages/Education";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import NotFound from "./pages/NotFound";
import anixityManifist from "./pages/anxityManifistTest"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/diagnostics/raisec" element={<RaisecTest />} />
          <Route path="/diagnostics/raisec/results" element={<RaisecResults />} />
          <Route path="/diagnostics/ocean" element={<OceanTest />} />
          <Route path="/diagnostics/anxiety" element={<AnxietyTest />} />
          {/* <Route path="/diagnostics/anxietymanifist" element={<anixityManifist />} /> */}
          <Route path="/diagnostics/:testId/results" element={<TestResults />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:careerId" element={<CareerDetails />} />
          <Route path="/education" element={<Education />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:articleId" element={<BlogArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
