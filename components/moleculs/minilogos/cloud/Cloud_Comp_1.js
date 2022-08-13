import React from 'react'
import Roundblur100 from '../../../atoms/Rounds/Roundblur100'
import RoundBlur50 from '../../../atoms/Rounds/RoundBlur50'

export default function Cloud_Comp_1() {
  return (
    <Roundblur100 color={'blue'}>
        <RoundBlur50 color={'blue'}>
        <img src='/image/cloud-computing_1.svg' width={31} height={31} alt='cloud computing 1'/>
        </RoundBlur50>
    </Roundblur100>
  )
}
