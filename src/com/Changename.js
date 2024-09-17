import React from "react";
import { Component } from "react";
 
class Changename extends Component{

    constructor(){
        super();
        this.state = {
            name:{
                firstName:'Parminder',
                lastName: 'Singh'
            }
        }
    }
    render(){
        return(
            <div>
                <label>My Name is {this.state.name.firstName} {this.state.name.lastName}</label>
                <button onClick={
                    () => {
                        this.setState ({
                            name:{firstName : 'Sam', lastName : 'Mehta'}
                        });
                    }
                }>Change Name</button>
            </div>
        );
    }

}

export default Changename;