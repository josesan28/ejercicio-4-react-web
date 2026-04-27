import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TeamList from './pages/TeamList';
import TeamDetail from './pages/TeamDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar title="NFL" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<TeamList />} />
        <Route path="/teams/:id" element={<TeamDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;