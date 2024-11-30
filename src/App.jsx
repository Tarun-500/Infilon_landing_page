import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./component/Header";
import BannerSection from "./component/Banner";
import PlanSection from "./component/PlanSection";
import FooterComponent from "./component/Footer";

function App() {
  return (
    <Router>
      <Header />
      <BannerSection />
      <PlanSection />
      <FooterComponent />
    </Router>
  );
}

export default App;
