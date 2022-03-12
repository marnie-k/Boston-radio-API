
import React from  'react';
import { BrowserRouter, Route, Routes } from  'react-router-dom';
import Error from  './components/Error'; // working 6pm
import Landing from  './components/Landing'; // connection working 6:30
import Details from  './components/Details';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '*' element={<Error />} />
        <Route path= '/' element={<Landing />} />
        <Route path= '/stations/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
