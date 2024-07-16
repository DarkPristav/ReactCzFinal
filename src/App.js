import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GeneralLayout from './pages/GeneralLayout';
import Home from './pages/Home';
import About from './pages/About';
import API from './pages/API';
import Error from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/API" element={<API />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
