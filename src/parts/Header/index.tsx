import React from "react";

import './index.scss'
import { Button } from "../../components/Button";
import Search from "../../components/Search";
import { Avatar } from "../../components/Avatar";
import { NavLink } from "react-router-dom";

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
                <span className="btn-text">Discount Code</span>
                <span className="btn-text">My Classes</span>
                <Avatar src="/images/avatar.jpg" ></Avatar>
            </div>
        </div>
    )
}