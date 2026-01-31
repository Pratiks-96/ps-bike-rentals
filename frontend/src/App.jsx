import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RentBike from './pages/RentBike';
import ListBike from './pages/ListBike';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<RentBike />} />
        <Route path="/list" element={<ListBike />} />
      </Routes>
      <Footer />
    </Router>
  );
}
