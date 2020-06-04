import React, { Component } from 'react';
import axios from 'axios';

export default class EditUser extends Component{
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

  componentDidMount() {
    axios.get('http://localhost:5000/users/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          email: response.data.email,
          phone: response.data.phone,
          carType: response.data.carType,
          licensePlate: response.data.licensePlate,
          carColor: response.data.carColor
        })
      })
      .catch(function (error){
        console.log(error)
      })
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

  onSubmit(e) {
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
    axios.post('http://localhost:5000/users/update/' + this.props.match.params.id, user)
      .then(res => console.log(res.data));

    window.location = '/userlist';

  }

  render() {
    return (
      <div>
        <h3>Edit User</h3>
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
            <input type = "submit" value = "Edit User" className = "btn btn-primary" />
          </div>
        </form>
      </div>


    )
  }

}
