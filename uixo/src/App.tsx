import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./components/theme-provider";
import Navigation from "@/components/navigation";
import Footer from "./components/footer";
import AssistantButton from "./components/AssistantButton";
import { Analytics } from "@vercel/analytics/react"
import LoadingIntro from "./components/LoadingPage";


import { lazy, Suspense } from "react";
import { withPageLoader } from "./components/WithPageLoader";

// Pakai lazy + loader wrapper
const Home = withPageLoader(lazy(() => import("./pages/home")));
const Generator = withPageLoader(lazy(() => import("./pages/generator")));
const Testing = withPageLoader(lazy(() => import("./components/Testing")));
const NotFound = withPageLoader(lazy(() => import("@/pages/not-found")));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/generator" component={Generator} />
      <Route path="/demo" component={Testing} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="system">
        <TooltipProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Analytics />
            <AssistantButton />
            <Navigation />
            <Suspense fallback={<LoadingIntro />}>
              <Router />
            </Suspense>
            <Toaster />
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
