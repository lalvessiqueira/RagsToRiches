import React, {Component} from "react";
import ProfileForm from "../Form/ProfileForm";
import ViewAnimals from "./ViewAnimals";
import EditAnimal from "./EditAnimal";

export default function AnimalFunctions({view, setView}) {
    return (
        <div>
            {view === '1' ? <ViewAnimals setView={setView}/> : ''}
            {view === '2' ? <ProfileForm/> : ''}
            {view === '3' ? <EditAnimal/> : ''}
        </div>
    )
}