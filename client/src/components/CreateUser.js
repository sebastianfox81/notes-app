import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:5000/api/users");
    this.setState({
      users: res.data,
      username: "",
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create New User</h3>
            <form>
              <div className="form-group">
                <input
                  id="username"
                  className="form-control"
                  type="text"
                  onChange={this.handleChange}
                />
              </div>
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
