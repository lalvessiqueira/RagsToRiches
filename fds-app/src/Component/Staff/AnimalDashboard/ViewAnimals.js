import React, {useEffect, useState} from 'react';
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
import SimpleImageSlider from "react-simple-image-slider";
import axios from "axios";

export default function ViewAnimals({setView}) {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetchData();
        console.log(animals)
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:8093/animals/retrieve")
            .then((response) => {
                console.log(response.data)
                setAnimals({animals : response.data})
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const removeData = (animalId) => {
        axios.delete("http://localhost:8093/animal/delete/" + animalId)
            .then((response) => {
                console.log(response.data)
                fetchData();
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <MDBContainer>
            <MDBRow className="mb-2">
                {animals.animals?.map(cat => <MDBCol className="mb-2">
                    <MDBCard style={{ width: '20rem' }}>
                        <MDBCardBody>
                            <MDBCardTitle className="fw-bold">{cat.name}</MDBCardTitle>
                            <SimpleImageSlider
                                width={270}
                                height={270}
                                images={cat.photos.image}
                                showBullets={true}
                                showNavs={true}
                            />
                            {/*<MDBCardImage src={cat.profilePicture.image[0]} position='top' alt='...' className="mb-3"/>*/}
                            <MDBCardText>
                                <MDBListGroup flush style={{ minWidth: '12rem', backgroundColor: "whitesmoke" }}>
                                    <MDBListGroupItem>Age: {cat.age}</MDBListGroupItem>
                                    <MDBListGroupItem>Breed: {cat.breed}</MDBListGroupItem>
                                    <MDBListGroupItem>Sex: {cat.sex}</MDBListGroupItem>
                                    <MDBListGroupItem>Weight: {cat.weight} lbs</MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCardText>
                            <MDBCardLink onClick={() => {
                                setView('3');
                                window.localStorage.setItem("id", cat.id)
                            }}>Edit Purr</MDBCardLink>
                            <MDBCardLink onClick={() => removeData(cat.id)}>Remove Purr</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>)}
            </MDBRow>
        </MDBContainer>
    )
}