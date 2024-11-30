import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "reactstrap";
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    // autoplay: true,
    // autoplaySpeed: 3000,
    swipe: true,
    draggable: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                centerPadding: '100px',
            },
        },
        {
            breakpoint: 576,
            settings: {
                dots: true,
                slidesToShow: 1,
                centerPadding: '0',
            },
        },
    ],
};

const plans = [
    {
        title: "Free",
        price: "$0",
        subTitle: "Capture ideas and find them quickly",
        features: [
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access exra widgets",
            "Connect primary Google Calendar account",
        ],
    },
    {
        title: "Personal",
        price: "$11.99",
        subTitle: "Keep home and family on track",
        features: [
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access extra widgets",
            "Connect primary Google Calendar account",
        ],
    },
    {
        title: "Organization",
        price: "$49.99",
        subTitle: "Capture ideas and find them quickly",
        features: [
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access extra widgets",
            "Connect primary Google Calendar account",
        ],
    },   {
        title: "Personal",
        price: "$11.99",
        subTitle: "Keep home and family on track",
        features: [
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access extra widgets",
            "Connect primary Google Calendar account",
        ],
    },
];


const PlanSection = () => {
    return (
        <section className="pricing_section">
            <Container fluid className="px-0">
                <Row className="text-center">
                    <Col className="text-center">
                        <h2 className="head-1 text-blue">Choose  <span className="line_icon"> Your Plan </span> </h2>
                        <p className="para-1">
                            Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
                        </p>
                    </Col>
                </Row>

                <Slider {...settings}>
                    {plans.map((plan, index) => (
                        <div key={index} className="pricing-card">
                            <h4>{plan.title}</h4>
                            <h3>{plan.price}</h3>
                            <p> {plan.subTitle} </p>
                            <ul className="  ">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.0059 9.67688V10.5051C19.0047 12.4466 18.3761 14.3356 17.2137 15.8905C16.0512 17.4455 14.4173 18.583 12.5556 19.1335C10.6938 19.6839 8.70404 19.6178 6.88294 18.945C5.06183 18.2722 3.507 17.0288 2.45034 15.4001C1.39367 13.7714 0.891777 11.8448 1.01952 9.90764C1.14725 7.97043 1.89778 6.12642 3.15915 4.65061C4.42053 3.1748 6.12517 2.14628 8.01885 1.71843C9.91253 1.29057 11.8938 1.48632 13.6671 2.27648" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19.0058 3.3027L10.0029 12.3146L7.302 9.61376" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        {" "}  {feature}</li>
                                ))}
                            </ul>
                            <button className="button btn-outline-yellow">
                                Get Started
                            </button>
                        </div>
                    ))}
                </Slider>



            </Container>
        </section>
    );
};

export default PlanSection;
