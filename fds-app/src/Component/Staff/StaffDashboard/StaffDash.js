import React, {useState} from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Footer from "../../Homepage/Footer";
import StaffDashSideBar from "./StaffDashSider";
import AnimalData from "./AnimalData";
import AnimalFunctions from "../AnimalDashboard/AnimalFunctions";
import StaffNav from '../NavBar/StaffNav';

export default function StaffDash() {

    const [view, setView] = useState('0');

    return (
        <div>
            <StaffNav setView={setView}/>
            <div className="container mt-5">
                <div className="row">
                </div>
                <div>
                    <sections>
                        <MDBRow>
                            <MDBCol md='4' className='col-example'>
                                <StaffDashSideBar setView={setView}/>
                            </MDBCol>
                            <MDBCol md='8' className='col-example'>
                                {/*{ profileEmpty ? <ProfileWarning/> : ""}*/}
                                { (view === '0') ?  <AnimalData/> : <AnimalFunctions view={view} setView={setView}/> }
                            </MDBCol>
                        </MDBRow>
                    </sections>
                </div>

                <div className="row my-5">
                    {/*<LandingCardGroup/>*/}
                </div>
                <div className="row">
                    {/*<Footer/>*/}
                </div>
            </div>
        </div>
    );
}
