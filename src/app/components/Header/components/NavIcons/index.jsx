'use client'

import { Bell, User } from "phosphor-react";
import { twMerge } from "tailwind-merge";
import Link from 'next/link';

export function NavIcons({ isMobile }) {
  return (
    <div className={twMerge(`py-3 text-center`, isMobile ? `flex gap-2 sm:gap-6` :` lg:gap-6 hidden lg:flex `)}>
      <button>
        <Bell size={30} weight="fill" />
      </button>
      <Link href="portal/perfil"> 
          <button>
            <User size={30} weight="fill" />
          </button>
      </Link>
    </div>
  )
}