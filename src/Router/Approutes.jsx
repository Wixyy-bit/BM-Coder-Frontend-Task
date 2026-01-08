import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Whowehelp from '../Pages/Whowehelp';
import Hero from '../Pages/Hero';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

const Approutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/whowehelp" element={<Whowehelp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  )
}

export default Approutes