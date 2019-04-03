import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

function EatOne(props) {
  return <button id="decrease" onClick={props.change}> Eat One </button>;
}
function BuyOne(props) {
  return <button id="increase" onClick={props.change}> Buy One </button>;
}
function AppWrapper(props) {
  return <div className="app-wrapper" onKeyDown={props.changeKey} tabIndex="1">{props.children}</div>;
}
function Display(props) {
  return <div className="display">{props.name}</div>;
}

class GoldenAcornApp extends React.Component {
  constructor(props){
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.changeValueWithKey = this.changeValueWithKey.bind(this);
    this.state = {counter: 0};
  }
  render() {
    console.log(this.state.counter);
    return (
      <AppWrapper >
        <BuyOne change={this.changeValue} />
        <Display name={this.state.counter} />
        <EatOne change={this.changeValue} />
      </AppWrapper>
    );
  }
  componentDidMount(){
    window.addEventListener('keydown', this.changeValueWithKey);
  }
  componentWillUnmount(){
    window.removeEventListener("keydown", this.changeValueWithKey); 
  }
  changeValue(e){  
    if(this.state.counter>0){
      e.target.id === "decrease"? 
      this.setState((prevState) => ({counter: prevState.counter-1})):
      this.setState((prevState) => ({counter: prevState.counter+1}))
    }else{
      e.target.id === "increase"? 
      this.setState((prevState) => ({counter: prevState.counter+1})):
      null
    }
  }
  changeValueWithKey(e){
    if(this.state.counter>0){
      e.keyCode===40? 
      this.setState((prevState) => ({counter: prevState.counter-1})):
      e.keyCode===38? this.setState((prevState) => ({counter: prevState.counter+1})):
      null
    }else{
      e.keyCode===38? 
      this.setState((prevState) => ({counter: prevState.counter+1})):
      null
    }
  }
}

ReactDOM.render(<GoldenAcornApp />, document.getElementById("root"));

