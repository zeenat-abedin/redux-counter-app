// const initialState = {

// }

// export default (state = initialState, { type, payload }) => {
//   switch (type) {

//   case typeName:
//     return { ...state, ...payload }

//   default:
//     return state
//   }
// }

const reducer = (state = 0, action) => { 
    switch (action.type) {
        case "INCREMENT":
            return state + 1 
        case "DECREMENT":
            return state - 1 
        default:
            return state;
    }
}