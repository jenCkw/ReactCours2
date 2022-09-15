 import React, {Component} from "react";
 import Car from "./Car";

class Mycar extends Component {
  render () {
    console.log(this)

     return (
       <div>
         <h1> {this.props.title} </h1>

         <Car color='red'>Rang Rover</Car>
         <Car>Mercedes</Car>
         <Car color='green'></Car>


       </div>
     );
  }
}

export default Mycar;

