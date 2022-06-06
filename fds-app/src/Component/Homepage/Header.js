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
import logo2 from "../../Icons/Rags to riches-PhotoRoom.png"
import instagram from "../../Icons/instagram.ico"
import facebook from "../../Icons/facebook.ico"
import twitter from "../../Icons/twitter.ico"
import donation from "../../Icons/donation.ico"

export default function Header() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <header>
        <MDBNavbar expand='lg' light sticky>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>
                    <img
                        src={logo2}
                        className='img-fluid'
                        width={100}
                        height={100}
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
                        width={50}
                        height={50}
                        alt=''
                    />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#'>
                                <h5>Home</h5>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active href='#'>
                                <h5>About</h5>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active href='#'>
                                <h5>How to Help</h5>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active href='#'>
                                <h5>Adopt Now</h5>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <img src={instagram} className='img-fluid pe-3' width={50} height={50} alt=''/>
                    <img src={twitter} className='img-fluid pe-3' width={45} height={45} alt=''/>
                    <img src={facebook} className='img-fluid pe-3' width={45} height={45} alt=''/>
                    <div>
                        <a href="/#">
                            <img src={donation} className='img-fluid pe-3' width={65} height={65} alt=''/>
                        </a>
                    </div>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://glamadelaide.com.au/wp-content/uploads/2021/09/s-cats-1000x563.jpeg')",
                    height: 500 }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h2 className='mb-3'>The Prrr-fect</h2>
                            <h1 className='mb-3 fw-bolder'>Pet</h1>
                            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                Adopt Now!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}