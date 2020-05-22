import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component{
  constructor(props){
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeCarType = this.onChangeCarType.bind(this);
    this.onChangeLicensePlate = this.onChangeLicensePlate.bind(this);
    this.onChangeCarColor = this.onChangeCarColor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username : "",
      email : "",
      phone: 0,
      carType: "",
      licensePlate: "",
      carColor: "",
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangeCarType(e) {
    this.setState({
      carType: e.target.value
    });
  }

  onChangeLicensePlate(e) {
    this.setState({
      licensePlate: e.target.value
    });
  }

  onChangeCarColor(e) {
    this.setState({
      carColor: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      carType: this.state.carType,
      licensePlate: this.state.licensePlate,
      carColor: this.state.carColor

    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      email: '',
      phone: 0,
      carType: '',
      licensePlate: '',
      carColor: ''
    })
  }


  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit = {this.onSubmit}>
          <div className = "form-group">
            <label>Username:</label>
            <input type = "text"
              required
              className = "form-control"
              value = {this.state.username}
              onChange = {this.onChangeUsername}
              />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group">
            <label>Phone: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.phone}
                onChange={this.onChangePhone}
                />
          </div>
          <div className="form-group">
            <label>Car Type: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.carType}
                onChange={this.onChangeCarType}
                />
          </div>
          <div className="form-group">
            <label>License Plate: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.licensePlate}
                onChange={this.onChangeLicensePlate}
                />
          </div>
          <div className="form-group">
            <label>Car Color: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.carColor}
                onChange={this.onChangeCarColor}
                />
          </div>
          <div className = "form-group">
            <input type = "submit" value = "Create User" className = "btn btn-primary" />
          </div>
        </form>
      </div>


    )
  }
}
