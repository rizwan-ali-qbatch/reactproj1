// import logo from './logo.svg';
// import { useEffect, useState } from 'react';
import './App.css';
// import Table from './components/Table';
import User from './components/User';
// import Data from "./components/File.json";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import SearchBar from './components/SearchBar';
// import UserTable from './components/UserTable';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <SearchBar /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
