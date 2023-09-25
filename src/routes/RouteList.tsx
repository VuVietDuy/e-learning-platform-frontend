import React from "react"
import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from "../pages/HomePage"
import CoursePreview from "../pages/CoursePreview"
import Profile from "../pages/Profile"
import MyClasses from "../pages/MyClasses"
import AccountSetting from "../pages/AccountSettingPage"
import EmailAddress from "../pages/AccountSettingPage/componets/EmailAddress"
import Password from "antd/es/input/Password"
import {DefaultLayout} from "../components/Layout"
import { IntroductionPage } from "../pages/IntroductionPage"
import {LoginLayout} from "../components/Layout/"


const publicRouter = [
    {
        path: "/",
        element: HomePage,
        layout: DefaultLayout,
    },
    {
        path: "/login",
        element: IntroductionPage,
        layout: LoginLayout,
    },
    {
        path: "/course",
        element: CoursePreview,
        layout: DefaultLayout,
    },
    {
        path: "/classes",
        element: MyClasses,
        layout: DefaultLayout,
    },
    {
        path: "profile",
        element: Profile,
        layout: DefaultLayout,
    },
    {
        path: "/edit_profile",
        element: AccountSetting,
        layout: DefaultLayout,
    },
]

const accountSettingRouter = createBrowserRouter([
    {
        path: "emial",
        element: <EmailAddress></EmailAddress>
    },
    {
        path: "password",
        element: <Password></Password>
    },
])

export {
    publicRouter,
    accountSettingRouter,
}
