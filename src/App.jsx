import React from 'react';
import Landing from './pages/Landing/Landing';
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects/Projects';
function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/work'} element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
