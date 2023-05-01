import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import MainPage from '../MainPage/MainPage';
const Landing = ({ data, exhibitions }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return <>{loading ? <Loading /> : <MainPage data={data} exhibitions={exhibitions} />}</>;
};

export default Landing;
