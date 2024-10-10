import React from "react";
import { Component } from "react";

export default function Color({hex, name}){
    return(
        <div>
            <h1 key={hex}>{name}</h1>
        </div>
    )
}