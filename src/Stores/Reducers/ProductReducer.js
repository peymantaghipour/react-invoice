

const ProductReducer=(state,action)=>{
    switch (action.type) {
        case "setProductListModel":
            {
                return{...state,productListModel:action.payload};
            }
        case"setProductModel":
            {
                return{...state,productModel:action.payload};
            }
        case"newProductModel":
            {
                return{...state,productModel:{id:0 , productName: "", price:0, sku:"", stockQuantity: 0, publishDate:null}}
            }
        default:
            {
                return state;
            }
        
    }
}

export default ProductReducer;
