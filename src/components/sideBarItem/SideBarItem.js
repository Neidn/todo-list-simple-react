import {Link} from "react-router-dom";
import React from "react";

const SideBarItem = ({to, children, selected = false}) => {
    const selectedStyle = "text-sm flex items-center text-[#007bff] border-r-[5px] border-[#077bff] bg-gray-100 px-8 py-4 transition-all";
    const nonSelectedStyle = "text-sm flex items-center hover:text-[#007bff] hover:border-r-[5px] border-[#077bff] hover:bg-gray-100 px-8 py-4 transition-all";

    return (
        <Link to={to}
              className={selected ? selectedStyle : nonSelectedStyle}>

            {children}
        </Link>
    );
}


export default SideBarItem;
