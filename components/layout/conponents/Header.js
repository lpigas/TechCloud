import React from 'react'
import Image from "next/image";
import Cart from './components/Cart';

export default function Header() {
  return (
   
    <header className='w-[1185px] h-[68px] absolute top-4'> 
        <nav id='menu' className='absolute flex flex-row items-start gap-[70px] p-o top-[47px] left-[671px] w-[422px] h-[28px]'>
            <div id='Frame_1' className='w-[47px] h-[28px] gap-[53px] p-0'>О нас</div>
            <div id='Frame_2' className='w-[73px] h-[28px] gap-[53px] p-0'>Магазин</div>
            <div id='Frame_3' className='w-[57px] h-[28px] gap-[53px] p-0'>Услуги</div>
            <div id='Frame_4' className='w-[47px] h-[28px] gap-[53px] p-0'>FAQ</div>
        </nav>
        <div className="absolute left-[368px] top-4 z-[999]">
      <Image src={'/image/logo1_1.png'} width={101} height={62} />
      </div>
  
      <div className='absolute top-[-4px] left-0 w-[1920px] h-[5382] invisible'></div>
      <select id='lang' className='absolute w-[129px] h-[45px] text-center top-[39px] left-[1149px] rounded-[50px]'>
        <option value={'Русскмй'}>Русский</option>
      </select>
            <img src={'/image/group.svg'}  className='absolute top-[51px] left-[1444px] w-[22px] h-[22px]'/>
           <Cart />


    </header>

  )
}
