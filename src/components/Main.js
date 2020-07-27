import React from 'react';
import "../css/main.css"
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import Content from "./Content";


const Main = () => {
    return (

        <>
            <TopNav/>
            <SideNav/>
            <Content/>
        </>
    );
};

export default Main;