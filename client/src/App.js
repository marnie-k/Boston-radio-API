
import React from  'react';
import { BrowserRouter, Route, Routes } from  'react-router-dom';
import Error from  './components/Error'; 
import Landing from  './components/Landing'; 
import Details from  './components/Details';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/stations/:id' element={<Details />} />
        <Route path= '/' element={<Landing />} />
        <Route path= '*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
