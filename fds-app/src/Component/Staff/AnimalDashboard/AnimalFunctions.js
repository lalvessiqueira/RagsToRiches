import React, {Component} from "react";
import ProfileForm from "../Form/ProfileForm";
import ViewAnimals from "./ViewAnimals";

export default function AnimalFunctions({view}) {
    return (
        <div>
            {view === '1' ? <ViewAnimals/> : ''}
            {view === '2' ? <ProfileForm/> : ''}
        </div>
    )
}