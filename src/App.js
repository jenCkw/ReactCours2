import React, {Component} from "react";
import Mycar from "./components/Mycar";
import Car from "./components/Car";
import "./App.css";

class App extends Component {
  state = { 
    titre: "Mon catalogue vooture"
   } 
  render() { 
    return (
      <div className= "App">
        <Mycar title={this.state.titre} />
      </div>
    );
  }
}
 
export default App;