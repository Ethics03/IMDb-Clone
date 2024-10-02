'use client';  // for making it client side component

import {ThemeProvider} from 'next-themes'

type Props = {
  children: JSX.Element[] | React.ReactNode
}

function Providers({children}: Props) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className = 'text-gray-700 dark:text-white dark:bg-black min-h-screen select-none transition-colors duration-300'>
            {children}
        </div>
    </ThemeProvider>
  )
}

export default Providers