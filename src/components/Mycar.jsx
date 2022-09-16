 import React, {Component} from "react";
 import Car from "./Car";

class Mycar extends Component {

  noCopy = () => {
    alert("merci de ne pas copier le texte");
  }

  render () {
    console.log(this)

     return (
       <div>
         <h1 > {this.props.title} </h1>
         
         <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit</p> 

         <Car color='red'>R ang Rover</Car>
         <Car>Mercedes</Car>
         <Car color='green'></Car>


       </div>
     );
  }
}
  
export default Mycar;

