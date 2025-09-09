import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home.jsx";
import AddRecord from "./components/AddRecord.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route,Link} from "react-router-dom";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {ToastContainer} from "react-toastify";

function App() {


  return (
    <>

        <ToastContainer/>
        <AppBar position="static" sx={{marginBottom:10}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        E-commerce APP
                    </Typography>
                </Box>




                <Box sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Link style={{color:'white',textDecoration:'none'}} to={'/'}>Home</Link>
                    <Link style={{color:'white',textDecoration:'none'}} to={'/add'}>Add Record</Link>
                </Box>
            </Box>


        </AppBar>



        <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/add" element={<AddRecord />} />
        </Routes>





    </>
  )
}

export default App
