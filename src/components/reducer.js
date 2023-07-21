const reducer = (state, action) => {

    switch (action.type) {
        case "GET_ALL_DATA":
            return {
                ...state,
                products: action.payload.products,
                // title: action.payload.title,
                // price: action.payload.price,
                // description: action.payload.description,
                // category: action.payload.category,
                // image: action.payload.image,
            }
        case "GET_ELECTONICS_ITEMS":
            return {
                ...state,
                products: state.products.filter((elem) => {
                    return elem.category === action.payload;
                })
            }
    }
    return state;


}

export default reducer;