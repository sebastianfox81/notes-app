import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateNote extends Component {
  state = {
    users: [],
    userSelected: "",
    title: '',
    content: '',
    date: new Date(),
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:5000/api/users");
    this.setState({
      users: res.data.map((user) => user.username),
      userSelected: res.data[0].username
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({ date: date });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { title, content, date, author } = this.state;
      const newNote = {
        title,
        content,
        date,
        author
      }
      await axios.post('http://localhost:5000/api/notes', newNote);
      window.location = '/'
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create a Note</h4>
          <div className="form-group">
            <select
              className="form-select"
              name="userSelected"
              onChange={this.handleChange}
            >
              {this.state.users.map((user) => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <form onSubmit={this.handleSubmit} className="form-group">
            <input
              type="text"
              className="form-control my-2"
              placeholder="title"
              name="title"
              onChange={this.handleChange}
            ></input>
            <textarea
              className="form-control my-2"
              placeholder="content"
              name="content"
              onChange={this.handleChange}
            ></textarea>
            <div className="form-group">
              <DatePicker
                className="form-control"
                selected={this.state.date}
                onChange={this.handleDateChange}
              />
            </div>
            <button type="submit" className="btn btn-primary my-2">
              Save Note
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateNote;
