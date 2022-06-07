import React, {useEffect, useState} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBContainer,
    MDBCol,
    MDBRow, MDBCardSubTitle, MDBCardLink, MDBListGroup, MDBListGroupItem, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';
import cats from "../AnimalList";
import SimpleImageSlider from "react-simple-image-slider";
import axios from "axios";
import FileBase64 from "react-file-base64";
import ProfileForm from "../Form/ProfileForm";

export default function EditAnimal() {

    const [animal, setAnimal] = useState({});
    const [details, setDetails] = useState(
        {
            name : '',
            breed: '',
            sex: '',
            age : '',
            weight : ''
        }
    );

    const [profilePicture, setProfilePicture] = useState({title: "", image: ["https://genesisairway.com/wp-content/uploads/2019/05/no-image.jpg"]});
    const [item, setItem] = useState({ title: '', image: [] });

    useEffect(() => {
        fetchData();
        // console.log(animal)
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:8093/animals/retrieve/" + localStorage.getItem("id"))
            .then((response) => {
                // console.log(response.data)
                setAnimal({animal : response.data})
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div>
            <MDBBtn onClick={() => console.log(animal)}>Click Here!</MDBBtn>
        </div>
    )
}