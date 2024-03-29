import logo from './img/YogaCentral.svg';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Navigationbar() {
  const { t } = useTranslation();
  
  const history = useHistory();

  const handleClick = () => {
      history.push('/');
  }

  const handleClick2 = () => {
    history.push('/build');
  }

  const handleClick3 = () => {
    history.push('/blog');
  }

  const handleClick4 = () => {
    history.push('/register');
  }

  const handleClick5 = () => {
    history.push('/faq');
  }

  return (
    <div className="Navigationbar">
      <Navbar bg="white" expand="lg">
        <Container className="pt-2">
          <Navbar.Brand href="" onClick={handleClick}>
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link onClick={handleClick} className="px-5 navigation-text">{t("homeNav")}</Nav.Link>
              <Nav.Link onClick={handleClick2} className="px-5 navigation-text">{t("build")}</Nav.Link>
              <Nav.Link onClick={handleClick3} className="px-5 navigation-text">{t("blog")}</Nav.Link>
              <Nav.Link onClick={handleClick4} className="px-5 navigation-text">{t("register")}</Nav.Link>
              <Nav.Link onClick={handleClick5} className="px-5 navigation-text">{t("faq")}</Nav.Link>
              <LanguageSwitcher />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;