import React, {useState} from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import './StaffDashSideBar.css';
import RTR from "../../../Icons/Rags to riches.png"

export default function StaffDashSideBar({setView}) {

    const onButtonClick = (view) => {
        setView(view)
    }

    return (
        <div className="mb-3">
            <MDBCard id='bg-glass'>
                <MDBCardBody>
                    <MDBCardTitle>
                        <MDBCardImage position='top' alt='...' src={RTR}/>
                    </MDBCardTitle>
                </MDBCardBody>
                <MDBListGroup flush>
                    <MDBListGroupItem><MDBCardLink href='#' onClick={()=>onButtonClick('1')}>View All Purr friends</MDBCardLink></MDBListGroupItem>
                    <MDBListGroupItem><MDBCardLink href='#' onClick={()=>onButtonClick('2')}>Add Purr friend</MDBCardLink></MDBListGroupItem>
                    <MDBListGroupItem><MDBCardLink href='#' onClick={()=>onButtonClick('3')}>Edit Purr friend</MDBCardLink></MDBListGroupItem>
                </MDBListGroup>
            </MDBCard>
        </div>


    );
}