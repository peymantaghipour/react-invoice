import { getNowPersianDate } from "../../Utils/Alerts/PersianDate";

const initialProductState={
    productListModel:[],
    productFilterModel:{ProductName: "", sku: "",IsAvailable:true, FromPrice: null, ToPrice: null, FromPublishDate: getNowPersianDate(), ToPublishDate: getNowPersianDate()},
    productModel:{id:0 , productName: "", price:0, sku:"", stockQuantity: 0, publishDate:getNowPersianDate()}
}
const ProductReducer=(state=initialProductState,action)=>{
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
