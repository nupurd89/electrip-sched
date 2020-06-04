import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.email}</td>
    <td>{props.user.phone}</td>
    <td>{props.user.carType}</td>
    <td>{props.user.licensePlate}</td>
    <td>{props.user.carColor}</td>
    <td>
    <Link to={"/edituser/"+props.user._id}>edit</Link> | <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a>
    </td>
  </tr>
)

export default class UserList extends Component {
  constructor(props){
    super(props);

    this.deleteUser = this.deleteUser.bind(this);
    this.state = {users: []}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({users: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/' + id)
      .then(res => { console.log(res.data)});

    this.setState({
      users: this.state.users.filter(el => el._id != id)
    })
  }


  userList() {
    return this.state.users.map (currentuser => {
      return <User user= {currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
    })
  }


  render() {
    return(
      <div>
        <h3>Users</h3>
        <table className="table">
          <thead className="thread-light">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Car Type</th>
              <th>Car Color</th>
              <th>License Plate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           {this.userList()}
          </tbody>
        </table>
      </div>
    )
  }
}
