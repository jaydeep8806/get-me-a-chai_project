'use client'
import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)

  return (
    <nav className="bg-gray-900 shadow-lg shadow-white  text-white flex justify-between items-center px-4 flex-col md:flex-row md:h-16">
      <Link
        className="logo font-bold text-lg flex justify-between items-center"
        href={'/'}
      >
        <Image src="/chai.gif" width={45} height={45} alt="" />
        <span className="text-2xl md:text-base my-3 md:my-0">GetMeAChai</span>
      </Link>

      <div className="relative flex flex-col md:block gap-4">
        {session && (
          <>
            <button
              onClick={() => setShowdropdown(!showdropdown)}
              onBlur={() => {
                setTimeout(() => {}, 100)
              }}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white  bg-blue-700 hover:bg-blue-800 mx-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Welcome {session.user.email}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className={`z-10 ${
                showdropdown ? '' : 'hidden'
              }  bg-white divide-y absolute left-[125px] divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${session.user.name}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Your Pages
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => signOut()}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}

        {session && (
          <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
        focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 
        text-center me-2 mb-2"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
        {!session && (
          <Link href={'/login'}>
            <button
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4
           focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
           me-2 mb-2"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
