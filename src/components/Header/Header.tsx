import {Nav, Navbar } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();

    return (
<>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand onClick={() => navigate('/')}>Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/componentes')}>Componentes</Nav.Link>
            <Nav.Link onClick={() => navigate('/administracion')}>Administracion</Nav.Link>
        </Nav>
    </Navbar>
</>

    )

} 

export default Header;