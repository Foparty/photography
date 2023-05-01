import React from 'react';
import Landing from './pages/Landing/Landing';
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects/Projects';
import { works } from '/public/data/work';
import { exhibitions } from '/public/data/exhibitions';
import SingleProject from './pages/Projects/SingleProject';
import Exhibitions from './pages/Exhibitions/Exhibitions';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import ScrollToTop from './utils/ScrollTop';
import SingleExhibition from './pages/Exhibitions/SingleExhibition';
function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path={'/'} element={<Landing data={works} exhibitions={exhibitions} />} />
          <Route path={'/work'} element={<Projects data={works} />} />
          <Route path={'/:slug'} element={<SingleProject data={works} />} />
          <Route path={'/exhibitions'} element={<Exhibitions exhibitions={exhibitions} />} />
          <Route
            path={'/exhibition/:slug'}
            element={<SingleExhibition exhibitions={exhibitions} />}
          />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
