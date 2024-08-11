
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import Layout from './Views/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerPage from './Views/Pages/Customer/CustomerPage';
import InvoicePage from './Views/Pages/Invoice/InvoicPage';
import ProductPage from './Views/Pages/Product/ProductPage';
import ProductListPage from './Views/Pages/Product/ProductList';
import ProductProvider from './Stores/Contexts/ProductContex';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import "react-datepicker/dist/react-datepicker.css";
import "react-multi-date-picker/styles/colors/teal.css"
import { Provider } from 'react-redux';
import MainStore from './Stores/Redux/MainStore';

function App() {
  return (
    <Provider store={MainStore}>
    <ProductProvider>
      <ToastContainer/>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route path='/customer' element={<CustomerPage/>}/>
    <Route path='/invoice' element={<InvoicePage/>} />
    <Route path='/product' element={<ProductPage/>} />
    <Route path='/product/:productid' element={<ProductPage/>} />
    <Route path='/productlist' element={<ProductListPage/>} />
    </Route>
    
   </Routes>
   </BrowserRouter>
   </ProductProvider>
   </Provider>
  );
}

export default App;
