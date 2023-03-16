import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import ReadPage from './pages/ReadPage';
import UpdatePage from './pages/UpdatePage';


const App = () => {
  return (
    <div>
      
      <toastify/>
        <Routes>
            
          <Route path='/' element={<CreatePage/>} />         
          <Route path='/create' element={<ReadPage/>} />  
          <Route path='/update' element={<UpdatePage/>} />  
        </Routes> 
    </div>
  );
};

export default App;