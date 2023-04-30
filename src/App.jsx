import React from 'react';
import Landing from './pages/Landing/Landing';
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects/Projects';
import { works } from '../public/data/work';
import SingleProject from './pages/Projects/SingleProject';
import Exhibitions from './pages/Exhibitions/Exhibitions';
function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Landing data={works} />} />
        <Route path={'/work'} element={<Projects data={works} />} />
        <Route path={'/exhibitions'} element={<Exhibitions />} />
        <Route path={'/:slug'} element={<SingleProject data={works} />} />
      </Routes>
    </>
  );
}

export default App;
