import React, { Component } from "react";
import "./NoteForm.css";
import Firebase from "../firebase/config";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: "",
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }

  handleLogoutAccount() {
    const user = Firebase.auth().currentUser;
    try {
      console.log("Goodbye: " + user.email);
    } catch (e) {
      alert(e);
    }
  }

  handleUserInput(e) {
    this.setState({
      newNoteContent: e.target.value,
    });
  }

  writeNote() {
    if (this.state.newNoteContent.length == 0) {
      alert("Error: Note Empty");
    } else {
      this.props.addNote(this.state.newNoteContent);
    }

    this.setState({
      newNoteContent: "",
    });
  }

  render() {
    return (
      <div className="formWrapper">
       
        <input
          className="noteInput"
          placeholder="Masukan saran..."
          value={this.state.newNoteContent}
          onChange={this.handleUserInput}
        />
        <button className="noteButton" onClick={this.writeNote}>
          Add Saran
        </button>
        <button
          className="btn-Signout"
          onClick={() => {
            Firebase.auth().signOut();
            this.handleLogoutAccount();
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default NoteForm;
