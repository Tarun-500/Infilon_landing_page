import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { MdKeyboardArrowDown } from "react-icons/md";


const DropdownMenuCustom = ({ title, items }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle >
                {title} <span className="ms-2"><MdKeyboardArrowDown /></span>
            </DropdownToggle>
            <DropdownMenu>
                {items?.map((item, index) => (
                    <DropdownItem key={index} href={item.link}>
                        {item.label}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default DropdownMenuCustom;
