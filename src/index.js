import React from "react";
import ReactDOM from "react-dom";

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
    return (
      <AppWrapper changeKey={this.changeValueWithKey}>
        <BuyOne change={this.changeValue} />
        <Display name={this.state.counter} />
        <EatOne change={this.changeValue} />
      </AppWrapper>
    );
  }
  changeValue(e){  
    console.log(e.keyCode);
    if(this.state.counter!==0){
      e.target.id === "decrease"? 
      this.setState({ counter: this.state.counter-=1 }):
      this.setState({ counter: this.state.counter+=1 })
      console.log(e.keyCode, e.target.id);
    }else{
      e.target.id === "increase"? 
      this.setState({ counter: this.state.counter+=1 }):
      null
    }
  }
  changeValueWithKey(e){
    console.log(e.keyCode);
    if(this.state.counter!==0){
      e.keyCode===40? 
      this.setState({ counter: this.state.counter-=1 }):
      this.setState({ counter: this.state.counter+=1 })
    }else{
      e.keyCode===38? 
      this.setState({ counter: this.state.counter+=1 }):
      null
    }
  }
}

ReactDOM.render(<GoldenAcornApp />, document.getElementById("root"));
