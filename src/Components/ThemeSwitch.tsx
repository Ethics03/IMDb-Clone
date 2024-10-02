"use client"

import { MdLightMode } from "react-icons/md"
import { MdDarkMode } from "react-icons/md"

import {useTheme} from 'next-themes'


function ThemeSwitch() {
    const {theme,setTheme,systemTheme} = useTheme()
    const currentheme = theme === 'system' ? systemTheme: theme
  return (
    <div>
        {currentheme === 'dark' ? <MdLightMode onClick={()=>setTheme('light')} className="text-xl cursor-pointer hover:text-amber-500"/ > 
        : <MdDarkMode onClick={()=>setTheme('dark')} className="text-xl cursor-pointer hover:text-amber-500"/> }

    </div>
  )
}

export default ThemeSwitch