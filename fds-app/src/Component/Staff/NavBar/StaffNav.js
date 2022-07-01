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
import dropdown from "../../../Icons/menu.ico"
import logo2 from "../../../Icons/r2r.png"
import instagram from "../../../Icons/instagram.ico"
import facebook from "../../../Icons/facebook.ico"
import twitter from "../../../Icons/twitter.ico"
import home from "../../../Icons/home.ico"

export default function StaffNav() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <header>
            <MDBNavbar expand='lg nav-color' light sticky>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>
                        <img
                            src={logo2}
                            className='img-fluid'
                            width={60}
                            height={60}
                            alt=''
                        />
                    </MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <img
                            src={dropdown}
                            className='img-fluid'
                            width={30}
                            height={30}
                            alt=''
                        />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='mr-auto'>

                        </MDBNavbarNav>
                        <div>
                            <a href="/">
                                <img src={home} className='img-fluid pe-3' width={50} height={50} alt=''/>
                            </a>
                        </div>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </header>
    );
}