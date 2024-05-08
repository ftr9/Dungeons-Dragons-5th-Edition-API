import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { SpellsList, SpellDescription, NotFound, Favourites } from './pages';
import Header from './components/ui/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};

function Main() {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SpellsList />} />
          <Route path="/spells/:index" element={<SpellDescription />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
