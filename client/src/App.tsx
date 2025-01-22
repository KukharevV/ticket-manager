import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import TicketsPage from "./pages/tickets-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<TicketsPage />} />
      </Routes>
    </Router>
  </QueryClientProvider>
);

export default App;
