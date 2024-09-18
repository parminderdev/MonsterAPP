import React from "react";
import { Component } from "react";

class Monsters extends Component{

    constructor(){
        super();
        this.state={
            monsters : [
                {
                    name:'Sam'
                },
                {
                    name:'Prince'
                },
                {
                    name:'Jack'
                }
            ]
        }
        
    }
    

    render(){
        return(
            <div>
                <h1>Monsters Name List</h1>
                {
                    this.state.monsters.map(
                        (monster)=>{
                          return  <h2>{monster.name}</h2>  ;                          
                        }
                    )
                }
            </div>
        )
    }

}

export default Monsters;