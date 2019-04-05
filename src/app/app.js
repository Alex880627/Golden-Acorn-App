import React from "react";
import { Provider } from "react-redux";
import Wrapper from "../components/Wrapper";
import Eat from "../containers/eat";
import Buy from "../containers/buy";
import Display from "../containers/display";
import store from "../store/store";


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Wrapper>
        <Eat />
        <Display />
        <Buy />
      </Wrapper>
    </Provider>
    );
  }
}

export default App;
