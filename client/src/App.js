
import React from  'react';
import { BrowserRouter, Route, Routes } from  'react-router-dom';
import Error from  './components/Error'; 
import Landing from  './components/Landing'; 
import Details from  './components/Details';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '*' element={<Error />} />
        <Route path= '/' element={<Landing />} />
        <Route path= '/stations/:callLetters' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
