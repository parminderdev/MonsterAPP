import React from "react";
import { Component } from "react";
 
class Changename extends Component{

    constructor(){
        super();
        this.state = {
            name:'Parminder Singh'
        }
    }
    render(){
        return(
            <div>
                <label>My Name is {this.state.name}</label>
                <button onClick={
                    () => {
                        this.setState ({name:'Sam'});
                    }
                }>Change Name</button>
            </div>
        );
    }

}

export default Changename;