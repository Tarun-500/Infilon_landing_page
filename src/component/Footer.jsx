// FooterComponent.js
import { Container, Row, Col } from "reactstrap";
import { FaApple, FaWindows, } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import LOGO from "../assets/images/logo.svg";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";


const FooterComponent = () => {
    return (
        <footer className="footer bg-blue">
            <Container fluid className="text-start text-lg-center section_one">
                <h2>Try Whitepace today</h2>
                <p>Get started for free. <br /> Add your whole team as your needs grow.</p>
                <button className="button btn-blue">
                    Try Taskey free →
                </button>

                <p>On a big team? Contact sales</p>
                <div className="icon-group">
                    <FaApple size={60} className="icon" />
                    <FaWindows size={60} className="icon mx-4" />
                    <DiAndroid size={60} className="icon" />
                </div>
            </Container>



            <Container fluid className="footer_links">

                <Row className="links mx-0">
                    <Col lg={3} xl={"auto"} md={12} className="min-w-260">
                        <Image src={LOGO} alt="Logo" className="img-fluid logo" />
                        <p>Whitepace was created for the new ways we live and work. We make a better workspace around the world.</p>
                    </Col>
                    <Col lg={"auto"} xl={"auto"} md={12}>
                        <h6>Product</h6>
                        <ul>
                            <li> <Link to="/"> Overview </Link> </li>
                            <li> <Link to="/"> Pricing </Link> </li>
                            <li> <Link to="/"> Customer stories </Link> </li>
                        </ul>
                    </Col>
                    <Col lg={"auto"} xl={"auto"} md={12}>
                        <h6>Resources</h6>
                        <ul>
                            <li> <Link to="/"> Blog </Link> </li>
                            <li> <Link to="/"> Guides & tutorials </Link> </li>
                            <li> <Link to="/"> Help center </Link> </li>
                        </ul>
                    </Col>
                    <Col lg={"auto"} xl={"auto"} md={12}>
                        <h6>Company</h6>
                        <ul>
                            <li> <Link to="/"> About us </Link> </li>
                            <li> <Link to="/"> Careers </Link> </li>
                            <li> <Link to="/"> Media kit </Link> </li>
                        </ul>
                    </Col>
                    <Col lg={3} xl={"auto"} md={12} className="min-w-260 last_link">
                        <h5>Try It Today</h5>
                        <p>Get started for free. Add your whole team as your needs grow.</p>
                        <button className="button btn-blue">
                            Start today →
                        </button>
                    </Col>
                </Row>

                <Row className="footer_bottom">
                    <Col className="col-12 order-2 order-lg-1">
                        <div className="line"></div>
                    </Col>
                    <Col className="col-lg-10 order-1 order-lg-2 bottom_links">
                        <Link to="/">
                            <div className="d-flex align-items-center">
                                <IoGlobeOutline size={24} />
                                <span className="ms-2 me-3">English (US)</span>
                                <FaAngleDown size={18} />
                            </div>
                        </Link>
                        <Link to="/">Terms & privacy</Link>
                        <Link to="/">Security</Link>
                        <Link to="/">Status</Link>
                        <p>©2021 Whitepace LLC.</p>
                    </Col>
                    <Col className="col-lg-2 order-3 text-center  text-md-start text-lg-end">
                        <FaFacebookF size={16} />
                        <FaTwitter size={16} className="mx-4" />
                        <FaLinkedinIn size={16} />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default FooterComponent;
