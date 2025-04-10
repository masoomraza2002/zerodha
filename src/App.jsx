import { Routes, Route } from 'react-router-dom';
import HomePage from './landing_page/home/HomePage.jsx';
import AboutPage from './landing_page/about/AboutPage.jsx';
import ProductPage from './landing_page/products/ProductsPage.jsx';
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';
import Nopage from './landing_page/Nopage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<Nopage />} />
    </Routes>
  );
}

export default App;
