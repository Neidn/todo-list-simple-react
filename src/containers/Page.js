import HealthCheck from "../components/healthCheck/HealthCheck";
import SideBar from "./sideBar/SideBar";
import React from "react";

const Page = (props) => {
    return (
        <>
            <HealthCheck/>
            <div className={"flex"}>
                <SideBar/>
                {props.children}
            </div>
        </>
    )
}

export default Page;
