import { HomePage } from "../pages/HomePage"
import CoursePreview from "../pages/CoursePreview"
import Profile from "../pages/Profile"
import MyClasses from "../pages/MyClasses"
import AccountSetting from "../pages/AccountSettingPage"
import EmailAddress from "../pages/AccountSettingPage/componets/EmailAddress"
import {DefaultLayout} from "../components/Layout"
import { IntroductionPage } from "../pages/IntroductionPage"
import {LoginLayout} from "../components/Layout/"
import {SearchResult} from "../pages/SearchResult"
import { LearningPage } from "../pages/LearningPage"
import FormChangePassword from "../pages/AccountSettingPage/componets/FormChangePassword"
import ShopCart from "../pages/ShopCart"
import CheckOut from "../pages/CheckOut"


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
        path: "/learning/*",
        element: LearningPage,
        layout: DefaultLayout,
    },
    {
        path: "profile",
        element: Profile,
        layout: DefaultLayout,
    },
    {
        path: "/user/*",
        element: AccountSetting,
        layout: DefaultLayout,
    },
    {
        path: "/shop_cart",
        element: ShopCart,
        layout: DefaultLayout,
    },
    {
        path: "/checkout",
        element: CheckOut,
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
        element: FormChangePassword,
    },
    {
        path: 'email_notifications',
        element: FormChangePassword,
    },
]

export {
    publicRouter,
    accountSettingRoutes,
}
