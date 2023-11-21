'use client'

import { List } from "phosphor-react";
import { useState } from "react";
import Link from 'next/link';

import { NavIcons } from "./components/NavIcons";
import { NavLink } from "./components/NavLink";

const linksNav = [
  {
    content: 'Home',
    path: '/'
  },
  {
    content: 'Sobre Nós',
    path: '/sobreNos'
  },
  {
    content: 'Suporte ao Cliente',
    path: '/suporte'
  }
]

export function Header({ isAuthenticated }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full min-h-28 py-8 bg-yellow-800 2xl:flex  2xl:justify-center shadow-xl">
      <div className="w-full max-w-lplarge flex flex-wrap justify-between  md:mx-auto lg:flex-nowrap lg:justify-between xl:max-w-7xl ">
        <Link href={'/'} className=" ml-5 py-3 block font-bold text-center text-2xl">LifeGuardian</Link>
        <div className=" flex mr-5 items-center gap-2 sm:mr-10 sm:gap-6 h-10 lg:hidden ">
          {isAuthenticated && (
            <NavIcons isMobile={true} />
          )
          }
          <button
            className="hover:cursor-pointer "
            onClick={() => setOpen(!open)}
          >
            <List className="lg:hidden block h-10 w-10 cursor-pointer" weight="fill" />
          </button>
        </div>

        <nav
          className={`${open ? 'block' : 'hidden'
            } min-w-full  lg:flex lg:items-center lg:min-w-9/12  lg:justify-between lg:mr-6`}
        >
          <ul className=" text-lg pt-5 gap-5  font-normal  md:pt-0 lg:flex  lg:justify-center lg:items-center  lg:gap-10 xl:gap-16">
            {linksNav.map((link) => {
              return (
                <NavLink key={link.path} content={link.content} path={link.path} />
              )
            })}
            {isAuthenticated && <NavLink/>}
          </ul>
          {
            isAuthenticated ? (
              <NavIcons isMobile={false} />
            ) : (
              <div className="py-3 text-center ">
                <button className="py-1 px-6 bg-black bg-opacity-10 font-semibold border border-black rounded-lg">
                  <Link href="/login">Area do Cliente</Link>
                </button>
              </div>
            )
          }
        </nav>
      </div>
    </header>

  )
}