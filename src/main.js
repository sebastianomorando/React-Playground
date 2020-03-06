import React from "react";
import ReactDOM from "react-dom";
import AppWithContext from './AppWithContext';
import AppWithHocs from "./AppWithHocs";
import TestSaveAndDraw from "./TestSaveAndDraw";

/*const TestComponent = (props) => <p> {props.content} </p>

const App = () => <div className="main"><TestComponent content='Ciao Mondo' /></div>

const Hoc = (component) => {
  console.log(component())
  return component
}

const HocApp = Hoc(App)*/

ReactDOM.render(<TestSaveAndDraw />, document.getElementById("app"))
