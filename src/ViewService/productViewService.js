
import ProductService from "../Services/ProductService";
import MainStore from "../Stores/Redux/MainStore"
import { successMessage } from "../Utils/Alerts/alert";


const productService=new ProductService();

const productViewService=(dispatch)=>{

    const SearchAllProducts=async ()=>{

      
        let list=await productService.searchAllProducts();
       dispatch({type:"setProductListModel",payload:list});
      
       
    }
    const SearchProducts=async ()=>{
      const{productFilterModel}=MainStore.getState().product;
        let list=await productService.searchProducts(productFilterModel);
        dispatch({type:"setProductListModel",payload:list});
       
       
    }
    const RegisterProducts=async ()=>{
        const{productModel}=MainStore.getState().product;
        if(productModel.id===0)
        {
        const product=await productService.registerProducts(productModel);
        productModel.id=product.id;
        }
        else
        {
            await productService.updateProducts(productModel);
        }
        successMessage();
        dispatch({type:"newProductModel"});
    }
    const FindProduct=async(id)=>{
        let product=await productService.find(id);
        dispatch({type:"setProductModel",payload:product
        });
    }
    const NewProduct=async()=>{
        dispatch({type:"newProductModel"});
    }
    return{SearchAllProducts,SearchProducts,RegisterProducts,FindProduct,NewProduct}
}

export default productViewService;