import React, {useState} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBContainer,
    MDBCol,
    MDBRow, MDBCardSubTitle, MDBCardLink, MDBListGroup, MDBListGroupItem
} from 'mdb-react-ui-kit';
import cats from "../AnimalList";

export default function ViewAnimals() {
    return (
        <MDBContainer>
            <MDBRow className="mb-2">
                {cats?.map(cat => <MDBCol className="mb-2">
                    <MDBCard style={{ width: '18rem' }}>
                        <MDBCardBody>
                            <MDBCardTitle className="fw-bold">{cat.name}</MDBCardTitle>
                            <MDBCardImage src={cat.profilePicture} position='top' alt='...' className="mb-3"/>
                            <MDBCardText>
                                <MDBListGroup flush style={{ minWidth: '12rem', backgroundColor: "whitesmoke" }}>
                                    <MDBListGroupItem>Age: {cat.age}</MDBListGroupItem>
                                    <MDBListGroupItem>Breed: {cat.breed}</MDBListGroupItem>
                                    <MDBListGroupItem>Sex: {cat.sex}</MDBListGroupItem>
                                    <MDBListGroupItem>Weight: {cat.weight} lbs</MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCardText>
                            <MDBCardLink href='#'>Edit Purr</MDBCardLink>
                            <MDBCardLink href='#'>Remove Purr</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>)}
            </MDBRow>
        </MDBContainer>
    )
}