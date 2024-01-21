import { useState } from "react"
import {hamburger} from  "../assets/icons"
import {headerLogo} from "../assets/images"
import { navLinks } from '../constants'

const Nav = () => {
  const [toogle ,setToogle] = useState(false)
  return (
   <header className="absolute padding-x py-8 z-[0] w-full">
     <nav className=" flex justify-between ">
      <a href="">
        <img src={headerLogo} height={29} width={130} />
      </a>
      

      <ul className='flex  flex-row max-lg:hidden gap-5 items-start'>
        {navLinks.map((items)=>(
          <li  className="font-montserrat leading-normal text-lg text-slate-gray" id={items.key}>{items.label}</li>
        )
        )}

      </ul>

      <div className="max-lg:flex max-lg:flex-col hidden ">
        <img src={hamburger}width={25} height={25}  onClick={()=>setToogle(!toogle)} className="cursor-pointer ml-10" />

        <ul className={`${toogle==true?'block':'hidden'} flex  flex-col gap-5 items-center mt-5 bg-indigo-50 p-5 rounded-[20px] `}>
        {navLinks.map((items)=>(
          <li  className="font-montserrat leading-normal text-lg text-slate-gray" id={items.key}>{items.label}</li>
        )
        )}

      </ul>
         
      </div>

     </nav>
   </header>
  )
}

export default Nav
