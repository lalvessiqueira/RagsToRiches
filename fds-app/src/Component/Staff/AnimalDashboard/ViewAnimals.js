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
import Spinner from "../../Add-Ons/Spinner";

export default function ViewAnimals({setView}) {

    const [animals, setAnimals] = useState([]);
    const default_image = "https://genesisairway.com/wp-content/uploads/2019/05/no-image.jpg";
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
        console.log(animals)
    }, []);

    const fetchData = async () => {
        try {
        axios.get("http://localhost:8093/animals/retrieve")
            .then((response) => {
                setAnimals({animals : response.data})
                setLoading(true);
            })
            .catch((error) => {
                console.log(error)
            });
        } catch (e) {
            console.log(e);
        }

    }

    const removeData = (animalId) => {
        axios.delete("http://localhost:8093/animal/delete/" + animalId)
            .then((response) => {
                fetchData();
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <MDBContainer>
        {loading ? (<MDBRow className="mb-2">
                {animals.animals?.map(cat => <MDBCol className="mb-2">
                    <MDBCard style={{ width: '20rem' }}>
                        <MDBCardBody>
                            <MDBCardTitle className="fw-bold">{cat.name}</MDBCardTitle>
                            <SimpleImageSlider
                                width={270}
                                height={270}
                                images={cat.photos?.image == null ? "" : cat.photos?.image}
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
            </MDBRow>) : (<Spinner/>) }
        </MDBContainer>
    )
}