import React, {Component} from 'react';
import Router from "./Router"
import Header from "./Header/index"
class App extends Component {
  render(){
    return (
    <>
      <Header />
      <Router/>
    </>
    );
  }
}
export default App;
