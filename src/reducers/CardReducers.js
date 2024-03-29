

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
    }
}

export {initialState, cartReducers}