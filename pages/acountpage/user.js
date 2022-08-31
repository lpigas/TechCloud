import React from 'react'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

export default function user() {
  const [isValid, setIsValid] =useState(true)
  const router = useRouter()
  const validtoken = async(token) =>{
    try{
      const test = await fetch(`${process.env.API_HOST}validtoken`,
      {method:"POST",
      body: JSON.stringify({token})
      }
      )
      const valid =  await test.json()
      setIsValid(valid.message)
    } catch(e){
      console.log(e)
    }
  }
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = JSON.parse(window.localStorage.getItem("token"))
      if(!token){
        router.push('/')
      }else{
        validtoken(token)
      }
    }
  }, [])
  console.log(isValid)
  useEffect(()=>{
  if (isValid === false){
    router.push('/login')
  }
  },[isValid])
  

  return (
    <div>user</div>
  )
}
