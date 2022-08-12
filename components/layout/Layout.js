import React from 'react'
import Footer from './conponents/Footer'
import Header from './conponents/Header'

export default function Layout({children}) {
  return (
    <div className='relative w-[1920px] h-[4396px] bg-[#FFFFFF]'>
        <Header />
        <div>
            {children}
            </div>
        <Footer/>
    </div>
  )
}
