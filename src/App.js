//import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Portfolio from './routes/Portfolio';

import './app.scss';



function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
