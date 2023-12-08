import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Footer from './Components/Footer';
import AgeGate from './Components/AgeGate';
import Menu from './Components/Pages/Menu';
import { Cart } from './Components/Pages/Cart/Cart';
import { MenuContextProvider } from './context/context';
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <>
      <MenuContextProvider>
        <Router>
          <AgeGate />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </MenuContextProvider>

    </>)
}
export default App;
