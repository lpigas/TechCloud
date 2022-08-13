import React from 'react'

export default function Roundblur52({children}) {
  return (
    <div style={{background: 'linear-gradient(138.81deg, rgba(109, 191, 255, 0.5) 5.83%, rgba(109, 191, 255, 0) 100%)'}} 
    className={`w-[52px] h-[52px] rounded-[20px] backdrop-blur-[4px] flex items-center justify-center`}>
        <div style={{background: 'linear-gradient(137.1deg, #6DBFFF 17.58%, rgba(109, 191, 255, 0.45) 79.68%)'}} 
        className={`w-[26px] h-[26px] rounded-[10px]`}/>
    </div>
  )
}
