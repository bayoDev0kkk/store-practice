import React from 'react';
import {Route, Routes} from "react-router-dom";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Menu/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </>
  );
}

export default App;
