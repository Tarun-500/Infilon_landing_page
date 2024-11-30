import { Container, Row, Col,  } from "reactstrap";
import Banner from '../assets/images/banner.png'
import { Image } from "react-bootstrap";
export default function BannerSection() {
    return (
        <section className="banner bg-blue">
            <Container fluid>
                <Row className="align-items-center">
                    <Col lg={"6"} xl="5" md="12" className="px-0 left">
                        <h1 className="head-1 text-white">Get More Done with Whitepace</h1>
                        <p className="para-1 text-white">
                            Project management software that enables your teams to collaborate,
                            plan, analyze, and manage everyday tasks.
                        </p>
                        <button className="button btn-blue">
                            Try Whitepace free →
                        </button>
                    </Col>

                    <Col lg={"6"} xl="7" md="12" className="text-center right">
                        <Image
                            src={Banner}
                            alt="Banner"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
