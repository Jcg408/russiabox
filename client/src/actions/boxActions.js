import {FETCH_BOXES, NEW_BOX, REMOVE_BOX} from './types';


const apiUrl = 'http://localhost:3001/api/boxes'

export const fetchBoxes = ()=> dispatch =>{
        fetch(apiUrl)
            .then(resp => resp.json())
            .then(boxData => dispatch({
                type: FETCH_BOXES,
                payload: boxData
            })
        )
            .catch(err=> err)
}

export const newBox = (input) => dispatch => {
    console.log('C');
    fetch(apiUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(input)
        })
            .then(res => res.json())
            .then(boxData => {
                console.log('D');
                dispatch ({
                type: NEW_BOX,
                payload: boxData
            })})
            .catch(err => err)
}


export const removeBox = (boxid) => dispatch => {
    fetch(`${apiUrl}/${boxid}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => dispatch ({
        type: REMOVE_BOX,
        payload: boxid
    }))
}
