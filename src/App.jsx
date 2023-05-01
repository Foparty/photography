import React from 'react';
import Landing from './pages/Landing/Landing';
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects/Projects';
import { works } from '../public/data/work';
import { exhibitions } from '../public/data/exhibitions';
import SingleProject from './pages/Projects/SingleProject';
import Exhibitions from './pages/Exhibitions/Exhibitions';
function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Landing data={works} exhibitions={exhibitions} />} />
        <Route path={'/work'} element={<Projects data={works} />} />
        <Route path={'/exhibitions'} element={<Exhibitions exhibitions={exhibitions} />} />
        <Route path={'/:slug'} element={<SingleProject data={works} />} />
      </Routes>
    </>
  );
}

export default App;
