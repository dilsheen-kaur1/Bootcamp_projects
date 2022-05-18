const reducer = (state,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
                users:[action.payload],
                loading:true
            }
        case "DECREMENT":
            return {
                count: state.count - 1,
                users:[action.payload],
                loading:true
            }
    
        default:
            return state
    }
}

export default reducer