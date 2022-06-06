import React, {Component} from "react";
import ProfileForm from "../Form/ProfileForm";

export default function AnimalFunctions({view}) {
    return (
        <div>
            {/*{view === '1' ? <CreateAccount/> : ''}*/}
            {view === '2' ? <ProfileForm/> : ''}
        </div>
    )
}