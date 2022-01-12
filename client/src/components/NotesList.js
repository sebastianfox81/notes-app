import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";

class NotesList extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    this.getAllNotes();
  }

  async getAllNotes() {
    const res = await axios.get("http://localhost:5000/api/notes");
    this.setState({
      notes: res.data,
    });
  }

  async deleteNote(id) {
    await axios.delete("http://localhost:5000/api/notes/" + id);
    this.getAllNotes();

    console.log(id);
  }

  render() {
    return (
      <div className="row">
        {this.state.notes.map((note) => (
          <div className="col-md-4 p-2" key={note._id}>
            <div className="card">
              <div className="card-header">
                <h5>{note.title}</h5>
                
              </div>
              <div className="card-body">
                <p>{note.content}</p>
                <p>Author: {note.author}</p>
                <p>{format(note.date)}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger "
                  onClick={() => this.deleteNote(note._id)}
                >
                  Delete Note
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default NotesList;
