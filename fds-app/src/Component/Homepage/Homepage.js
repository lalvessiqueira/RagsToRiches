import React, {useState} from 'react'
import {MDBTabs, MDBTabsItem, MDBTabsLink} from "mdb-react-ui-kit";
import Login from "../Staff/Login/Login";
import Signup from "../Staff/Login/Signup";
import About from "../About/About";
import Footer from "./Footer";
import Header from "./Header";

function Homepage() {

    return (
        <div>
            <Header/>
            <About/>
            <Footer/>
        </div>
    )
}
export default Homepage;