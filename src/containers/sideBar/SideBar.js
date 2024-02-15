import React from "react";
import {MdOutlineDashboard} from "react-icons/md";
import {IoIosLogIn, IoIosLogOut} from "react-icons/io";


import {TOKEN_KEY} from "../../lib/config_key";
import {DEFAULT_URL, SIGN_OUT_URL, SIGN_IN_URL} from "../../lib/config_url";

import SideBarItem from "../../components/sideBarItem/SideBarItem";

const SideBar = () => {
    const iconClassNames = "w-[18px] h-[18px] mr-4";

    const token = localStorage.getItem(TOKEN_KEY);

    return (
        <nav
            className="bg-white shadow-xl h-screen min-w-[250px] py-6 font-[sans-serif] overflow-auto sticky top-0">
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
                                to={DEFAULT_URL}
                                selected={window.location.pathname === DEFAULT_URL}>
                                <MdOutlineDashboard className={iconClassNames}/>
                                <span>Home</span>
                            </SideBarItem>
                            <SideBarItem
                                to={SIGN_OUT_URL}
                                selected={window.location.pathname === SIGN_OUT_URL}>
                                <IoIosLogOut className={iconClassNames}/>
                                <span>Sign out</span>
                            </SideBarItem>
                        </ul>
                        :
                        <ul className="space-y-3 my-10 flex-1">
                            <SideBarItem
                                to={SIGN_IN_URL}
                                selected={window.location.pathname === SIGN_IN_URL}>
                                <IoIosLogIn className={iconClassNames}/>
                                <span>SignIn</span>
                            </SideBarItem>
                        </ul>
                }
                <div className="flex flex-wrap items-center cursor-pointer border-t border-gray-200 px-4 py-4">
                    <img src='https://readymadeui.com/profile.webp' className="w-9 h-9 rounded-full border-white"
                         alt={"creator"}/>
                    <div className="ml-4">
                        <p className="text-sm text-[#333]">Code By YeongKi Seo</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default SideBar;
