import React, { Component } from "react";

import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import { Loader } from "react-overlay-loader";
import { ToastsContainer, ToastsStore } from "react-toasts";

//Css Files
import "./index.css";


export default class LoginScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: [],
      isloading: false
    };
  }



  async click_Login(e: any) {
    e.preventDefault();
    this.setState({ isloading: true });
    let email = e.target.email.value;
    let password = e.target.password.value;

    if(email == "clarion@clarion.com" && password == "Clarion123"){
      let res ={};
      res.email = email;
      res.password = password;
      localStorage.setItem("sessionloginDetails", JSON.stringify(res));
      this.props.history.push({
        pathname: "/home",
        state: { data: res }
      });
      this.setState({ isloading: false });
    }else{
      ToastsStore.success("plese enter correct email and password");
      this.setState({ isloading: false });
    }
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
       <h1>Login Page</h1>
                      <form onSubmit={this.click_Login.bind(this)}>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div className="form-group">
                            <input
                              type="submit"
                              className="btn btn-primary"
                              value="Login"
                            />
                          </div>
                         
                        </div>
                      </form>
                  
          <ToastsContainer store={ToastsStore} />
          <Loader fullPage loading={this.state.isloading} />
     
      </div>
    );
  }
}