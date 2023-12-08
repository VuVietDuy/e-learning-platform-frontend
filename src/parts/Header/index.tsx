import React from "react";

import './index.scss'
import { Button } from "../../components/Button";
import Search from "../../components/Search";
import { Avatar } from "../../components/Avatar";
import { NavLink } from "react-router-dom";
import { BellOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

export function Header() {
    return (
        <div className="header-container">
            <div className="left">
                <img className="logo" src='/images/logo.png'></img>
                <Button className="btn" title="Browse" size="48"></Button>
                <Button className="btn" title="Learning Path" size="48"></Button>
                <div>
                    <Search className="search" type='text' placeholder="Search"></Search>
                </div>
            </div>
            <div className="right">
                <NavLink to={"/help_center"} className="btn-text">Help Center</NavLink>
                <NavLink to={"/"} className="btn-text">Teacher</NavLink>
                <NavLink to={"/shop_cart"} className="btn-text"><ShoppingCartOutlined/></NavLink>
                <NavLink to={"/"} className="btn-text"><BellOutlined /></NavLink>
                <NavLink to={"/profile"}><Avatar src="/images/avatar.jpg" ></Avatar></NavLink>
            </div>
        </div>
    )
}