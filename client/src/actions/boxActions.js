import axios from 'axios';
import {FETCH_BOXES, NEW_BOX, REMOVE_BOX, ITEMS_LOADING} from './types';

export const fetchBoxes = ()=> dispatch =>{
      dispatch(setItemsLoading());
      axios.get('/boxes')
      .then(res => dispatch({
          type: FETCH_BOXES,
          payload: res.data,
          loading: false
      })
    )
}

export const newBox = (input) => dispatch => {
   return {
       type: NEW_BOX
   }
          
}


export const removeBox = (boxid) => dispatch => {
    return {
          type: REMOVE_BOX,
        payload: boxid
    }
  
}

export const setItemsLoading = () => {
    return {
        type:ITEMS_LOADING
    }
}
