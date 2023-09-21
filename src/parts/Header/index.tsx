import React from "react";

import './index.scss'
import { Button } from "../../components/Button";
import Search from "../../components/Search";

export function Header() {
    return (
        <div className="header-container">
            <div className="left">
                <image className="logo"></image>
                <Button className="btn" title="Browse" size="48"></Button>
                <Button className="btn" title="Learning Path" size="48"></Button>
                <div>
                    <Search type='text' placeholder="Search"></Search>
                </div>
            </div>
            <div className="right">
                <span>Discount Code</span>
                <span>My Classes</span>

            </div>
        </div>
    )
}