import {FETCH_BOXES, NEW_BOX,  REMOVE_BOX} from '../actions/types';

const initialState = {
    items: [],
    item: {}
}
export default function (state = initialState, action) {
    switch (action.type) {
       case FETCH_BOXES:
           
           return {
               ...state,
               items: action.payload
           }

        case NEW_BOX:
           return {
               ...state,
               item: action.payload
           }

        case REMOVE_BOX: 
           return {
               ...state,
               items: state.items.filter(item => item.id !== action.payload)
           }
           
        default:
            return state;
    }
}
