import React from "react"

import { HomePage } from "../pages/HomePage"
import CoursePreview from "../pages/CoursePreview"
import Profile from "../pages/Profile"
import MyClasses from "../pages/MyClasses"
import AccountSetting from "../pages/AccountSettingPage"
import EmailAddress from "../pages/AccountSettingPage/componets/EmailAddress"
import {DefaultLayout} from "../components/Layout"
import { IntroductionPage } from "../pages/IntroductionPage"
import {LoginLayout} from "../components/Layout/"
import Password from "../pages/AccountSettingPage/componets/Password"
import SearchResult from "../pages/SearchResult"
import { LearningPage } from "../pages/LearningPage"
import HelpCenter from "../pages/HelpCenter"
import InstructorProfile from "../pages/InstructorProfile"

const publicRouter = [
    {
        path: "/",
        element: HomePage,
        layout: DefaultLayout,
    },
    {
        path: "/*",
        element: IntroductionPage,
        layout: LoginLayout,
    },
    {
        path: "/course",
        element: CoursePreview,
        layout: DefaultLayout,
    },
    {
        path: "/search",
        element: SearchResult,
        layout: DefaultLayout,
    },
    {
        path: "/classes",
        element: MyClasses,
        layout: DefaultLayout,
    },
    {
        path: "/learning",
        element: LearningPage,
        layout: DefaultLayout,
    },
    {
        path: "profile",
        element: Profile,
        layout: DefaultLayout,
    },
    {
        path: "helpcenter",
        element: HelpCenter,
        layout: DefaultLayout,
    },
    {
        path: "/user/*",
        element: AccountSetting,
        layout: DefaultLayout,
    },    {
        path: "/instructorprofile",
        element: InstructorProfile,
        layout: DefaultLayout,
    },
]

const accountSettingRoutes = [
    {
        path: 'edit_email',
        element: EmailAddress,
    },
    {
        path: 'edit_password',
        element: Password,
    },
    {
        path: 'email_notifications',
        element: Password,
    },
]

export {
    publicRouter,
    accountSettingRoutes,
}
