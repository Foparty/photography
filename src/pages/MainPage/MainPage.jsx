import React from 'react';
import FrontPageLanding from '../../components/FrontPageLanding/FrontPageLanding';
import FrontPageServices from '../../components/FrontPageServices/FrontPageServices';
import FronPageWork from '../../components/FronPageWork/FronPageWork';
import FrontPageExhibitions from '../../components/FrontPageExhibitions/FrontPageExhibitions';
import FrontPageTestimonials from '../../components/FrontPageTestimonials/FrontPageTestimonials';
import Cta from '../../components/Cta/Cta';
import Footer from '../../components/Footer/Footer';

const MainPage = () => {
  return (
    <>
      <FrontPageLanding />
      <FrontPageServices />
      <FronPageWork />
      <FrontPageExhibitions />
      <FrontPageTestimonials />
      <Cta />
      <Footer />
    </>
  );
};

export default MainPage;
