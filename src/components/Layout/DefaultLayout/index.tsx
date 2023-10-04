import React from 'react'
import { Header } from '../../../parts/Header'
import { Footer } from '../../../parts/Footer'

function DefaultLayout({children} : any) {
  return (
    <div>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
  )
}

export default DefaultLayout