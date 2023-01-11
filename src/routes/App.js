import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout'
import { Home } from '../pages/Home'
import { Activities } from '../pages/Activities'
import { Profile } from '../pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
