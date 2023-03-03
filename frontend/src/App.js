import React from 'react';
import Homepage from "./pages/Homepage.js"
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
      
      <toastify/>
        <Routes>
          <Route path='/' element={<Homepage/>} />          
        </Routes> 
    </div>
  );
};

export default App;