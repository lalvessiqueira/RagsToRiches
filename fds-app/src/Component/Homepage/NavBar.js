import React, { useState }  from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
} from 'mdb-react-ui-kit';
import dropdown from "../../Icons/menu.ico"
import logo2 from "../../Icons/r2r.png"
import instagram from "../../Icons/instagram.ico"
import facebook from "../../Icons/facebook.ico"
import tiktok from "../../Icons/tiktok.ico"

function NavBar() {
    const [showBasic, setShowBasic] = useState(false);
    return (
        <MDBNavbar expand='lg' light sticky>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>
                    <img
                        src={logo2}
                        className='img-fluid'
                        width={50}
                        height={50}
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
                    <a href="https://www.instagram.com/rags_to_riches_animalrescue/"><img src={instagram} className='img-fluid pe-3' width={60} height={60} alt=''/></a>
                    <a href="https://vm.tiktok.com/ZMNjmAwwW/"><img src={tiktok} className='img-fluid pe-3' width={55} height={55} alt=''/></a>
                    <a><img src={facebook} className='img-fluid pe-3' width={55} height={55} alt=''/></a>
                    <div>
                        <a href="/homepage" className="fw-bold">
                            DONATE NOW
                            {/*<img src={donation} className='img-fluid pe-3' width={65} height={65} alt=''/>*/}
                        </a>
                    </div>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default NavBar
