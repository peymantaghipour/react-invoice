

import './product.css'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useContext } from 'react';
import { ProductContex } from '../../../Stores/Contexts/ProductContex';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {CheckBoxInput, DatePickerInput, NumberInput,TextInput} from '../Components/Form/Index'
import { Link } from 'react-router-dom';
const ProductListPage=()=>{

    const {productListModel,SearchAllProducts,SearchProducts,productFilterModel}=useContext(ProductContex);

    const onGridReady=()=>{
        SearchAllProducts();
        document.getElementsByClassName("ag-paging-row-summary-panel").item(0).childNodes.item(3).innerHTML = "از";
        document.getElementsByClassName("ag-paging-row-summary-panel").item(0).childNodes.item(7).innerHTML = "تا";
        document.getElementsByClassName("ag-paging-description").item(0).childNodes.item(1).innerHTML = "صفحه";
        document.getElementsByClassName("ag-paging-description").item(0).childNodes.item(5).innerHTML = "از";
    }
    const renderProductName=(params)=>{
        return <Link to={"/product/"+params.data.id}>{params.data.productName}</Link>
    }
    
    return(
        <Container fluid className="productPage">
            <Row>
                <Col>
                    <h4>لیست محصولات</h4>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col sm><TextInput model={productFilterModel} description="نام محصول" id="ProductName"/></Col>
                <Col sm><TextInput model={productFilterModel} description="کد محصول" id="sku"/></Col>
                <Col xs={0}></Col>
            </Row>
            <Row className='mt-2'>
                <Col sm><NumberInput model={productFilterModel} description="از قیمت" id="FromPrice"/></Col>
                <Col sm><NumberInput model={productFilterModel} description="تا قیمت" id="ToPrice"/></Col>
                <Col xs={0}></Col>
            </Row>
            <Row className='mt-2'>
                <Col sm><DatePickerInput model={productFilterModel} description="از تاریخ" id="FromPublishDate"/></Col>
                <Col sm><DatePickerInput model={productFilterModel} description="تا تاریخ" id="ToPublishDate"/></Col>
                <Col xs={0}></Col>
            </Row>
            <Row className='mt-2'>
                <Col><CheckBoxInput model={productFilterModel} id="IsAvailable" description="موجودی" /></Col>
                <Col></Col>
                <Col> <Button style={{float:'left'}} variant="success" onClick={SearchProducts}><span>جستجو</span><span className='ml-2 mr-2 fa fa-search'></span></Button></Col>
            </Row>
            <Row className='mt-4'>
       <div className='ag-theme-alpine' style={{height:550,width:"100%"}}>
        <AgGridReact rowData={productListModel}
        enableRtl
        pagination={true} paginationPageSize={10} 
        rowClass="agRowStyle" 
        onGridReady={onGridReady}
        rowSelection={'multiple'} rowMultiSelectWithClick={true}
        frameworkComponents={{renderproductName:renderProductName}} >
            <AgGridColumn field="productName" headerName="نام محصول" cellRenderer="renderproductName" />
            <AgGridColumn field="sku" headerName="کد محصول" />
            <AgGridColumn field="price" headerName="قیمت" />
            <AgGridColumn field="stockQuantity" headerName="موجودی" />
            <AgGridColumn field="localPublishDate" headerName="تاریخ انتشار" />
            <AgGridColumn field="localCreateOn" headerName="تاریخ ایجاد" />
        </AgGridReact>
       </div>
            </Row>
        </Container>

    )
}

export default ProductListPage;