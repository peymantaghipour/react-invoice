import { Container, Navbar, Dropdown } from "react-bootstrap";
const AppHeader=({toggleButton})=>{
    return(
        <Navbar bg="light" expand={false}>
            <Container fluid>
            <Dropdown style={{ direction: 'rtl' }} className="user-profile">
                        <Dropdown.Toggle variant="white" id="dropdown-basic" >
                            <img src="/images/avatar.png" width={30} height={30} alt="" />
                            <span >
                                پیمان تقی پور 
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">پروفایل</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">خروج</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                <Navbar.Brand href="#">
                
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleButton} />
            </Container>
        </Navbar>
    )
}

export default AppHeader;