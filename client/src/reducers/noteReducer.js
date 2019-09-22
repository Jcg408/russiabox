import {FETCH_NOTES, NEW_NOTE, REMOVE_NOTE} from '../actions/types';

const initialState = {
    items: [],
    item: {}
}
export default function (state = initialState, action) {
    switch (action.type) {
       case FETCH_NOTES:
           return {
               ...state,
               items: action.payload
           }

        case NEW_NOTE:
           return {
               ...state,
               item: action.payload
           }

        case REMOVE_NOTE: 
           return {
               ...state,
               items: state.items.filter(item => item.id !== action.payload)
           }
           
        default:
            return state;
    }
}
