import React from 'react'
import Navigation from './componets/Navigation'
import { Route,BrowserRouter as Router, RouterProvider , Routes } from 'react-router-dom';
import EmailAddress from './componets/EmailAddress';
import Password from './componets/Password';
import { accountSettingRoutes } from '../../routes';


function AccountSetting() {
  return (
    <div>
        <Navigation></Navigation>
        <Routes>
            {accountSettingRoutes.map((route, index) => {
                const Element = route.element;
                return <Route path={route.path} element={<Element></Element>} ></Route>
            })}
        </Routes>
    </div>
  )
}

export default AccountSetting