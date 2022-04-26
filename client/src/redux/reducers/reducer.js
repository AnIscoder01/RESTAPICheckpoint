import {GET_PERSON} from '../actions/actionTypes'
const intialState ={
    persons : []
}
const reducer = ( state = intialState , action) => {
    switch (action.type) {
        case GET_PERSON:
            return ({...state , persons : action.payload.users })
           
    
        default:
            return state
    }
 
}

export default reducer