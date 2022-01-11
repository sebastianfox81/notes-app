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
    });
  }

  render() {
    return (
      <div className="row">
        <div>
          <ul>
            {this.state.users.map((user) => {
              return (
                <li key={user._id} className="list-group-item list-group-item-action">
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
