const initState = {
    choices: [],
    articles: [],
    reviews: [],
}

const mainReducer = (state = initState, action) => {
    switch(action.type) {
        case "SET_CHOICES": 
            return {
                ...state, choices: action.payload
            }
        case "SET_ARTICLES": 
        return {
            ...state, articles: action.payload
        }
        case "SET_REVIEWS": 
        return {
            ...state, reviews: action.payload
        }
        default: 
            return state
    }
}

export default mainReducer