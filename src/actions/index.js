import axios from 'axios';

export const START_FETCH = 'START_FETCH'
export const SUCCESSFUL_FETCH = 'SUCCESSFUL_FETCH'
export const ERROR = 'ERROR'
export const ADDING_SMURF = 'ADDING_SMURF'
export const FAILED_FETCH = 'FAILED_FETCH'

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCH })
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log("🚀 ~ file: index.js ~ line 12 ~ res", res)
            dispatch({ type: SUCCESSFUL_FETCH, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: JSON.stringify(err) })
        })
}
export function addSmurf(newSmurf) {
    return { type: ADDING_SMURF, payload: newSmurf }
}
export function setError() {
    return { type: FAILED_FETCH, payload: "all fields needed" }
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.