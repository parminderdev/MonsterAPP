import React from "react";
import { Component } from "react";
import Counter from "./Counter";
import ColorRender from "./ColorRender";
class Monsters extends Component{

    constructor(){
        super();
        this.state={
            monsters : [  ]
        }
        console.log('Constructor');
        
    }
    
    
    componentDidMount(){
        console.log('ComponenetDidMount');
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
        console.log('Render');
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
                <Counter/>
                <ColorRender></ColorRender>
            </div>
        )
    }

}

export default Monsters;