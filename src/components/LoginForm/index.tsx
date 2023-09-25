import React from "react";

import './index.scss'

export function LoginForm() {
    return (
        <div className="LoginForm">
            <h4>Start learning now</h4>

            <div className="singin-infor">
                <input className="signin-box signin-input" type="text" placeholder="Email address/ Phone number"/>
                <input className="signin-box signin-input" type="password" placeholder="Password"/>
            </div>

            <button className="signin-box signin-button"><strong>Sign in</strong></button>
            <div>or <a href="/"><strong>Forgot Password</strong></a></div>
            <div className="line"><br /></div>
            <div>Don't have an account ? <a href=""><strong>Sign up</strong></a></div>
        </div>
    )
}
