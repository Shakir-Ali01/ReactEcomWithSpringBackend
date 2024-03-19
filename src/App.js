import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Button,Modal} from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from './pages/About';
import Index from './pages/Index';
import Services from './pages/Services';
import Dashboard from './pages/User/Dashboard';
import Profile from './pages/User/Profile';
import AboutUser from './pages/User/AoutUser';
import CustomNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Contact from './pages/Contact';
import { ToastContainer } from 'react-toastify';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/User/Home';
import UserProvider from './context/UserProvider';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
function App() {
  return (
   
    //Setting up Routes
<UserProvider>
    <BrowserRouter>
  <ToastContainer/>
     <CustomNavbar/>
        <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

        {/* User Routes */}
        <Route path="/users" element={<Dashboard/>}>
          <Route path="profile/:userId" element={<Profile/>}/>
          {/* <Route path="profile" element={<Profile/>}/> */}
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<AboutUser/>}/>
        </Route>


        {/* Route For Admin */}
         <Route path='/admin' element={<AdminDashboard/>}>
                <Route path='home' element={<AdminHome/>}/>
                <Route path='product' element={<AddProduct/>}/>
         </Route>



        </Routes>
    </BrowserRouter>
</UserProvider>
  );
}

export default App;
