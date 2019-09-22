import {combineReducers} from 'redux';
import boxReducer from './boxReducer';
import noteReducer from './noteReducer';

const rootReducer =  combineReducers({
    boxes: boxReducer,
    notes: noteReducer
});

export default rootReducer;



