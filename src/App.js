import React from 'react';
import './assets/css/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Hiring from './pages/Hiring';
import Pages from './pages/Pages';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Servicesd from './pages/Servicesd';
import Blogsidebar from './pages/Blogsidebar';
import Blogdetails from './pages/Blogdetails';
import GetQuote from './pages/GetQuote';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import TeamDetails from './pages/TeamDetails';
import Error from './pages/Error';

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hire" element={<Hiring />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<Servicesd />} />
        <Route path="/contactUs" element={<GetQuote />} />
        {/* blog routing */}
        <Route path="/blog" element={<Blog />}/>
        <Route path="/sidebar" element={<Blogsidebar/>}/>
        <Route path="/details" element={<Blogdetails/>}/>
        {/* page routing */}
        <Route path="/pages" element={<Pages />} />
        <Route path="/project" element={<Projects/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/team-details" element={<TeamDetails/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="404" element={<Error/>}/>





         
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;