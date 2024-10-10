import React from "react";
import { Component } from "react";
import Color from "./Color";
const colorx = [
    {hex : '#91A6FF', name : 'Blue'},
    {hex : '#FF88DC', name : 'Pink'},
    {hex : '#80FF72', name : 'Greem'}
];

export default function ColorRender(){
    return(
        <div>
             {colorx.map((color) => (
                // <h1 key={color.hex}>{color.hex}</h1>
                <Color key={color.hex} hex={color.hex} name={color.name}></Color>
            ))}
            {/*  */}
        </div>
    );
}