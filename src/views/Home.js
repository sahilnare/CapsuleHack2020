import React from "react";
/* global google */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapList: ""
    }
  }

  componentDidMount() {
  }

  render() {

    return (
      <div id="home">
          <h1 style={{margin: "80px auto", textAlign: "center", color: "green", fontSize: "80px"}}>Ecofriend</h1>
      </div>
    )
  }
}

export default Home
