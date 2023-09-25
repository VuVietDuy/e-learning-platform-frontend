import React from "react";
import { NavLink } from "react-router-dom";

import './index.scss'

export function LoginForm(props: any) {

    const {
        title,
        haveForgotPassword,
        haveNavSignup
    } = props
    return (
        <div className="LoginForm">
            <h4>{title}</h4>

            <div className="singin-infor">
                <input className="signin-box signin-input" type="text" placeholder="Email address/ Phone number"/>
                <input className="signin-box signin-input" type="password" placeholder="Password"/>
            </div>

            <button className="signin-box signin-button"><strong>Sign in</strong></button>
            {haveForgotPassword ? <div>or <a href="/"><strong>Forgot Password</strong></a></div> : <></>}
            {haveNavSignup ? (
                <>
                    <div className="line"><br /></div>
                    <div>Don't have an account ? <NavLink to="/signup"><strong>Sign up</strong></NavLink></div>
                </>
            ) : <></> }
        </div>
    )
}