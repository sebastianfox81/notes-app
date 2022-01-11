import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  state = {
    users: [],
    username: ''
  };

  componentDidMount() {
    this.getUsers();
  }

  async getUsers() {
    const res = await axios.get("http://localhost:5000/api/users");
    this.setState({
      users: res.data,
    });
    console.log(res.data)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
     await axios.post('http://localhost:5000/api/users', {
       username: this.state.username
     })
     this.setState({
      username: ''
    })
     this.getUsers()

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create New User</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  id="username"
                  className="form-control"
                  value={this.state.username}
                  type="text"
                  onChange={this.handleChange}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Save User
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map((user) => {
              return (
                <li
                  key={user._id}
                  className="list-group-item list-group-item-action"
                >
                  {user.username}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CreateUser;
