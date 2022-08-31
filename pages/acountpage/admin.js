import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Header from '../../components/layout/conponents/header/Header'
import jwt from 'jsonwebtoken'
import TitleBlock from '../../scenes/Services/Components/TitleBlock'

export default function admin() {
const router = useRouter()
const [user, setUser] = useState({name:"", sername:"", phone:"", email:""})
const partname = [{ service_name: "Личный кабинет", service_url: "" }];

useEffect(() => {
  if (typeof window !== "undefined") {
    const token = JSON.parse(window.localStorage.getItem("token"))
    const userdata = jwt.decode(token)
    setUser({name:userdata.name, sername:userdata.sername, phone: userdata.phone, email: userdata.email})
    if(!token){
      router.push('/')
    }
  }
}, [])





  return (
    <div className='min-h-[2388px] w-[1920]'>
      <div className='min-h-[1956px] w-full' style={{
          background: "linear-gradient(90deg, #F6F8FC 0%, #ECF0FA 100%)",
        }}>
      <Header title={user.name}/>
        <TitleBlock partname={partname}></TitleBlock>
      </div>
      

    </div>
  )
}
