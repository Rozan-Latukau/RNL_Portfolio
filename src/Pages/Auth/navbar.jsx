import { useState } from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import MenuItem from "./menuitem";
import ItemList from "./itemlist";


const NavbarComponent = () => {
    const [activeNavbar, setActiveNavbar] = useState(null);

    const handleNavbarClick = (navbarName) => {
        setActiveNavbar(navbarName);
    };

    return (
        <Navbar expand="md" className="bg-navbar" fixed="top">
            <Container>
                <Navbar.Brand className="text-white">RNLPortfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark bg-none border-0 shadow-none " />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-3">
                        {ItemList.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.namanav}`}
                                path={menu.path}
                                namanav={menu.namanav}
                                isActive={activeNavbar === menu.namanav}
                                onClick={() => handleNavbarClick(menu.namanav)}
                            />
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
