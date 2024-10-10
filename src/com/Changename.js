import React from "react";
import { Component } from "react";
 
class Changename extends Component{

    constructor(){
        super();
        this.state = {
            name:{
                firstName:'Parminder',
                lastName: 'Singh'
            },
            company: 'WEBCODICE'
        }
    }
    render(){
        return(
            <div>
                <label>My Name is {this.state.name.firstName} {this.state.name.lastName}, I am working in {this.state.company}</label>
                <br></br>
                <button onClick={ ()=> {
                    this.setState(
                    ()=>{
                        return{
                            name:{firstName:'Sandeep',lastName:'Kaur'}, 
                            company: 'WEBCODICE LIMITED'
                    };
                    
                    },()=>{console.log(this.state)}
                )}}
                    >Change Name</button>

                    
            </div>
        );
    }

}

export default Changename;