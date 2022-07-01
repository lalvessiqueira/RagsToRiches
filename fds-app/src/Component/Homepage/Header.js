import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse
} from 'mdb-react-ui-kit';
import dropdown from "../../Icons/menu.ico"
import logo2 from "../../Icons/r2r.png"
import instagram from "../../Icons/instagram.ico"
import facebook from "../../Icons/facebook.ico"
import tiktok from "../../Icons/tiktok.ico"
import NavBar from './NavBar';

export default function Header() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <header>
            <NavBar/>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://glamadelaide.com.au/wp-content/uploads/2021/09/s-cats-1000x563.jpeg')",
                    height: 500 }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h2 className='mb-3'>Help make a difference in a meaningful way!</h2>
                            <h1 className='mb-3 fw-bolder'>The more you foster, the more we can save.</h1>
                                <a className='btn btn-outline-light btn-lg' href='/fosterNow' role='button'>
                                    Foster Now!
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}