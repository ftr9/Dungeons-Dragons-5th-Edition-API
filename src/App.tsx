import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { SpellsList, SpellDescription, NotFound } from './pages';
import Header from './components/ui/Header';

function App() {
  return (
    <div className="main">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<SpellsList />} />
          <Route path="/spells/:index" element={<SpellDescription />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
