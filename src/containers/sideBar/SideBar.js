import React, {useEffect} from "react";
import {MdOutlineDashboard} from "react-icons/md";
import {IoIosLogIn, IoIosLogOut} from "react-icons/io";
import {useNavigate} from "react-router-dom";


import {TOKEN_KEY} from "../../config";

import SideBarItem from "../../components/sideBarItem/SideBarItem";

const SideBar = () => {
    const iconClassNames = "w-[18px] h-[18px] mr-4";

    const token = localStorage.getItem(TOKEN_KEY);
    const navigate = useNavigate();


    return (
        <nav
            className="bg-white shadow-xl h-screen min-w-[250px] py-6 font-[sans-serif] overflow-auto">
            <div className="relative flex flex-col h-full">
                <div className="text-center">
                    <h1 className={"text-4xl font-bold text-blue-700"}>
                        TodoApp
                    </h1>
                </div>
                {
                    token ?
                        <ul className="space-y-3 my-10 flex-1">
                            <SideBarItem
                                to={"/"}
                                selected={window.location.pathname === "/"}>
                                <MdOutlineDashboard className={iconClassNames}/>
                                <span>Home</span>
                            </SideBarItem>
                            <SideBarItem
                                to={"/logout"}
                                selected={window.location.pathname === "/logout"}>
                                <IoIosLogOut className={iconClassNames}/>
                                <span>Logout</span>
                            </SideBarItem>
                        </ul>
                        :
                        <ul className="space-y-3 my-10 flex-1">
                            <SideBarItem
                                to={"/signin"}
                                selected={window.location.pathname === "/signin"}>
                                <IoIosLogIn className={iconClassNames}/>
                                <span>SignIn</span>
                            </SideBarItem>
                        </ul>
                }
                <div className="flex flex-wrap items-center cursor-pointer border-t border-gray-200 px-4 py-4">
                    <img src='https://readymadeui.com/profile.webp' className="w-9 h-9 rounded-full border-white"
                         alt={"creator"}/>
                    <div className="ml-4">
                        <p className="text-sm text-[#333]">YeongKi Seo</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default SideBar;
