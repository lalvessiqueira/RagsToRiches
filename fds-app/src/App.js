import React, {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Component/Homepage/Homepage";
import Header from "./Component/Homepage/Header"
import axios from "axios";
import Sidebar from "./Component/Homepage/Sidebar";
import ProfileForm from "./Component/Staff/Form/ProfileForm";
import ImageUploader from "./Component/Staff/Form/ImageUploader";
import StaffNav from "./Component/Staff/NavBar/StaffNav";
import ProfileCard from "./Component/Profile/ProfileCard";
import LandingStaff from "./Component/Staff/Login/LandingStaff";
import StaffDash from "./Component/Staff/StaffDashboard/StaffDash";

function App() {

    const [isStaff, setIsStaff] = useState(false);

    return (
        <div style={{backgroundColor: "whitesmoke"}}>
            <BrowserRouter>
                {isStaff ? <Header/> : <StaffNav setIsStaff={setIsStaff}/>}
                <Routes>
                    <Route path="/" element={<Homepage setIsStaff={setIsStaff}/>}/>
                    <Route path="/homepage" element={<ImageUploader/>}/>
                    <Route path="/profileCard" element={<ProfileCard/>}/>
                    <Route path='/view' element={<Sidebar/>}/>
                    <Route path='/staff' element={<LandingStaff/>}/>
                    <Route path='/staffDash' element={<StaffDash/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App