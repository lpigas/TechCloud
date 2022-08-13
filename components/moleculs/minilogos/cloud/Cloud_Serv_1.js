import React from 'react'
import Roundblur100 from '../../../atoms/Rounds/Roundblur100'
import RoundBlur50 from '../../../atoms/Rounds/RoundBlur50'

export default function Cloud_Serv_1() {
  return (
    <Roundblur100 color={'orange'}>
        <RoundBlur50 color={'orange'}>
        <img src='/image/cloud-server_1.svg' width={31} height={31} alt='cloud server 1'/>
        </RoundBlur50>
    </Roundblur100>
  )
}
