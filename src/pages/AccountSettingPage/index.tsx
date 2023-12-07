import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Navigation from './componets/Navigation'
import { accountSettingRoutes } from '../../routes';
import './index.scss'

function AccountSetting() {
  return (
    <div className='account-setting-container'>
        <Navigation></Navigation>
        <Routes>
            {accountSettingRoutes.map((route, index) => {
                const Element = route.element;
                return <Route path={route.path} element={<Element></Element>} key={index}></Route>
            })}
        </Routes>
    </div>
  )
}

export default AccountSetting