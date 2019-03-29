import React, { Component } from "react";



export default class HomeScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: [],
      isloading: false
    };
  }

  componentDidMount() {
    //localStorage.removeItem("sessionloginDetails");
    let loginSeesionData = JSON.parse(
      localStorage.getItem("sessionloginDetails")
    );
    console.log({loginSeesionData});
    if (loginSeesionData == null) {
      this.props.history.push("/");
    } else {
      this.setState({
        data:loginSeesionData
      })
    }   
  }


  render() {
    return (
      <div className="app flex-row align-items-center">
      
    <h1>Hello {this.state.data.email}</h1>
      </div>
    );
  }
}