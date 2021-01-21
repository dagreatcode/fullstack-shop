// rcc
import React, { Component } from "react";

class Login extends Component {
  state = {
    emailAddress: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
      // prevent default
      event.preventDefault();
      // Make a API call to my user auth service
      // If success response
      // Redirect to Shop
      this.props.history.push("/shop");
      // If error
      // Show Error
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6 text-center">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1>Login</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text-center">
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="emailAddress"
                      value={this.state.emailAddress}
                      onChange={this.handleInputChange}
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
