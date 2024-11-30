import { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import LOGO from "../assets/images/logo.svg";
import DropdownMenuCustom from "./Dropdown"; 
import { PiListThin } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    const menuItems = {
        products: [
            { label: "Product 1", link: "/" },
            { label: "Product 2", link: "/" },
            { label: "Product 3", link: "/" },
        ],
        solutions: [
            { label: "Solution 1", link: "/" },
            { label: "Solution 2", link: "/" },
            { label: "Solution 3", link: "/" },
        ],
        resources: [
            { label: "Blog", link: "/" },
            { label: "Help Center", link: "/" },
        ],
        pricing: [
            { label: "Basic Plan", link: "/" },
            { label: "Pro Plan", link: "/" },
        ],
    };

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/">
                        <Image src={LOGO} alt="Logo" className="img-fluid" />
                    </Link>
                </div>

                <div className="navbar-nav">
                    <div className="nav-items">
                        <div className="dropdown-link">
                            <DropdownMenuCustom title="Products" items={menuItems.products} />
                            <DropdownMenuCustom title="Solutions" items={menuItems.solutions} />
                            <DropdownMenuCustom title="Resources" items={menuItems.resources} />
                            <DropdownMenuCustom title="Pricing" items={menuItems.pricing} />
                        </div>

                        <div className="button-group">
                            <button className="button btn-yellow"> Login </button>
                            <button className="button btn-blue"> Try Whitepace free → </button>
                        </div>

                            <PiListThin className="toggle" onClick={toggleSidebar} />
                    </div>



                    <div className={`sidebar-overlay ${isSidebarOpen ? "open" : ""}`} onClick={toggleSidebar}></div>

                    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                        <div className="close-icon" onClick={toggleSidebar}>
                            <LiaTimesSolid size={40} />
                        </div>
                        <div className="nav-items">
                            <DropdownMenuCustom title="Products" items={menuItems.products} />
                            <DropdownMenuCustom title="Solutions" items={menuItems.solutions} />
                            <DropdownMenuCustom title="Resources" items={menuItems.resources} />
                            <DropdownMenuCustom title="Pricing" items={menuItems.pricing} />
                        </div>
                        <div className="button-group">
                            <button className="button btn-yellow"> Login </button>
                            <button className="button btn-blue"> Try Whitepace free → </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
