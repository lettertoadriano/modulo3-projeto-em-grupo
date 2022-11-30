import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sobre from './pages/Sobre';
import Principais from './components/Principais';
import Hero from './components/Hero'
import Procurar from './components/Procurar'
import Testes from './components/Testes'

export default function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route path="/Sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Testes />
    <Procurar />
    <Hero />
    <Principais />
    <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
