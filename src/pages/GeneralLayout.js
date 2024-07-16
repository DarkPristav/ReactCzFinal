import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const GeneralLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet className="container" />
      <Footer />
    </>
  );
};

export default GeneralLayout;
