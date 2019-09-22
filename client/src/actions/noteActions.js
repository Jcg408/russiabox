import {FETCH_NOTES, NEW_NOTE, REMOVE_NOTE} from './types';

const apiUrl = 'http://localhost:3001/api/notes'

export const fetchNotes = ()=> dispatch =>{
    fetch(apiUrl)
        .then(resp => resp.json())
        .then(note => dispatch({
            type: FETCH_NOTES,
            payload: note
            
        })
    )
        .catch(err=> err)
}

export const newNote = (input) => dispatch => {
    fetch(apiUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(input)
        })
            .then(res => res.json())
            .then(note => dispatch ({
                type: NEW_NOTE,
                payload: note
            }))
            .catch(err => err)
        }


export const removeNote = (noteid) => dispatch => {
    fetch(`${apiUrl}/${noteid}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => dispatch ({
        type: REMOVE_NOTE,
        payload: noteid
    }))
}