import React , {Suspense} from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { IconType } from 'react-icons'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'


export default function Header(){
    return(
<Suspense fallback={<div>Loading menu...</div>}>
        <div className = 'flex justify-between items-center p-3 max-w-6xl mx-auto'>
            <div className = 'flex gap-4'>
                <MenuItem title="home" address="/" Icon={AiFillHome as IconType}/>
                <MenuItem title = "about" address="/about" Icon={BsFillInfoCircleFill as IconType}/>
            </div>
            <div className = 'flex gap-4 items-center'>
            <ThemeSwitch/>
            <Link href = {"/"} className = 'flex gap-1 items-center'>
                <span className = 'text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
                <span className = 'text-xl hidden sm:inline'>Clone</span>

            </Link>
            </div>
            
        </div>
</Suspense>
    )
}