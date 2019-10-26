import redux from 'redux'

const createStore = redux.createStore

const  SUBMIT_BUTTON = 'SUBMIT_BUTTON'


function submitButton () {
    return {
        type: SUBMIT_BUTTON
    }
}

//(previousState, action ) => newState

const initialState = {
    Users: 0
}

const reducer = (state = initialState, action) => {
   switch(action.type){
       case SUBMIT_BUTTON: return {
           ...state,
           Users: state.Users + 1
       }
       default: return state
   }

}
const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
store.dispatch(submitButton())
store.dispatch(submitButton())
store.dispatch(submitButton())
unsubscribe()