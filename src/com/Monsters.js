import React from "react";
import { Component } from "react";

class Monsters extends Component{

    constructor(){
        super();
        this.state={
            monsters : [  ]
        }
        
    }
    
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json()).then(
            (users) => this.setState
            (
                ()=>{
                    return {monsters:users};
                } , 
                ()=>{
                    console.log(this.state);
                })
        )

    }

    render(){
        return(
            <div>
                <h1>Monsters Name List</h1>
                {
                    this.state.monsters.map(
                        (monster)=>{
                          return  <div key={monster.id}><h2 >{monster.name}</h2></div>  ;                          
                        }
                    )
                }
            </div>
        )
    }

}

export default Monsters;