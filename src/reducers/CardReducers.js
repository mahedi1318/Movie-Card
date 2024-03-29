

const initialState = {
    cartData: []
}


const cartReducers = (state, action) => {
    switch(action.type){
        case "add_to_card": {
            return {
                cartData: [...state.cartData, action.payload]
            }
        }
        break;
        case "remove_data": {
            return {
                ...state,
                cartData: state.cartData.filter((item)=> item.id !== action.payload)
            }
        }
        break;
        default: {
            break;
        }
    }
}

export {initialState, cartReducers}