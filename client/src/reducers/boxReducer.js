import {FETCH_BOXES, NEW_BOX, REMOVE_BOX, ITEMS_LOADING} from '../actions/types';

const initialState = {
    items: [],
    loading: false
}
export default function (state = initialState, action) {
    switch (action.type) {
       case FETCH_BOXES:
           return {
               ...state,
               items: action.payload,
               loading: false
           };

        case NEW_BOX:
           return {
               ...state,
               item: action.payload
           };

        case REMOVE_BOX: 
           return {
               ...state,
               items: state.items.filter(item => item.id !== action.payload)
           };

        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
           
        default:
            return state;
    }
}
