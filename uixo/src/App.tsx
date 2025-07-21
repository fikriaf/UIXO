import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./components/theme-provider";
import Navigation from "@/components/navigation";
import Home from "./pages/home";
import Generator from "./pages/generator";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/generator" component={Generator} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider defaultTheme="light" storageKey="system"> */}
        <TooltipProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navigation />
            <Router />
            <Toaster />
          </div>
        </TooltipProvider>
      {/* </ThemeProvider> */}
    </QueryClientProvider>
  );
}

export default App;
