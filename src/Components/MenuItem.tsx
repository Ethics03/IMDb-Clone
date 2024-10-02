import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';

function MenuItem({ title, address, Icon }: { title: string; address: string; Icon: IconType }) {
  return (
    <Link href={address} className = 'hover:text-amber-500 font-bold'>
      <Icon className = 'text-2xl sm:hidden'/>
      <p className = "uppercase hidden  sm:inline">{title}</p>
    </Link>
  );
}

export default MenuItem;