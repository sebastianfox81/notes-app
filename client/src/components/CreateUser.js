import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  state = {
    users: [],
    username: "",
  };

  componentDidMount() {
    this.getUsers();
  }

  async getUsers() {
    const res = await axios.get("http://localhost:5000/api/users");
    this.setState({
      users: res.data,
    });
    console.log(res.data);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/users", {
      username: this.state.username,
    });
    this.setState({
      username: "",
    });
    this.getUsers();
  };

  deleteUser = async (id) => {
    await axios.delete("http://localhost:5000/api/users/" + id);
    this.getUsers();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4 my-2">
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
              <button className="btn btn-primary my-2" type="submit">
                Save User
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <ul className="list-group">
            {this.state.users.map((user) => {
              return (
                <div key={user._id} className="card">
                  <li
                    // key={user._id}
                    className="list-group-item list-group-item-action"
                  >
                    {user.username}
                  </li>
                  <span>
                    <button
                      onClick={() => this.deleteUser(user._id)}
                      type="button"
                      className="btn btn-danger btn-small my-2"
                    >
                      Delete
                    </button>
                  </span>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CreateUser;
