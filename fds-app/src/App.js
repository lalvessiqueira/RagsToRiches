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
import FosterNow from "./Component/Foster/FosterNow"

function App() {

    const [isStaff, setIsStaff] = useState(false);

    return (
        <div style={{backgroundColor: "whitesmoke"}}>
            <BrowserRouter>
                <Routes>
                {/* <Route path="/" element={<ImageUploader/>}/> */}
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/profileCard" element={<ProfileCard/>}/>
                    <Route path='/view' element={<Sidebar/>}/>
                    <Route path='/staff' element={<LandingStaff/>}/>
                    <Route path='/staffDash' element={<StaffDash/>}/>
                    <Route path='/fosterNow' element={<FosterNow/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App