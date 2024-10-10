import React from "react";
import { Component } from "react";
import Changename from "./Changename";
import ColorRender from "./ColorRender";

class App1 extends Component{
    render(){
        return(
            <div>App1.js Component
                <Changename></Changename>     
                {/* <ColorRender></ColorRender>            */}
            </div>
        );
    }
}
export default App1;