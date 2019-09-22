import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchNotes} from '../actions/noteActions';
import {removeNote} from '../actions/noteActions';
import Counter from './Counter';
import '../css/Home.css'


 class Notes extends Component {
     componentDidMount() {
         this.props.fetchNotes();
     }

     handleDelete =(noteid) => {
         this.props.removeNote(noteid);
     }
     
    render() {
        const noteItems = this.props.notes.map(note => 
            (<div key={note.id} className="shownote">
                    <h3>{note.id}.  {note.subject}</h3>
                    <p>{note.content} </p>
                    <br/>
                 <button onClick={() => this.handleDelete(note.id)} >Delete</button>
                 <Counter  />
            </div> 
            ))
        
        return (
            <div className = "noteitems">
               {noteItems}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    notes: state.notes.items
})

export default connect(mapStateToProps, {fetchNotes, removeNote}) (Notes);