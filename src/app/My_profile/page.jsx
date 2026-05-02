"use client"
import React from 'react'
import { authClient } from '../lib/auth-client'
import Link from 'next/link'

const ProfilePage = () => {
  const { data: session, isPending, error } = authClient.useSession()

  if (isPending) return <span className="loading loading-spinner loading-lg"></span>
  if (error || !session) return <p className="text-center mt-10 text-red-500 text-sm sm:text-base">Please login</p>

  const { user } = session

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-3 sm:px-4 md:px-5 lg:px-6">

      <div className="w-full max-w-[90%] sm:max-w-sm md:max-w-sm lg:max-w-sm bg-white p-5 sm:p-6 md:p-6 lg:p-6 rounded-2xl shadow-md text-center">
        
        {user.image ? (
          <img
            src={user.image}
            alt="profile"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-full mx-auto object-cover border"
          />
        ) : (
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-full bg-gray-300 flex items-center justify-center mx-auto text-xl sm:text-2xl font-bold">
            {user.name?.[0] || user.email?.[0]}
          </div>
        )}

        <h2 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-xl lg:text-xl font-semibold break-words">
          {user.name || "User"}
        </h2>

        <p className="text-gray-500 text-xs sm:text-sm md:text-sm lg:text-sm break-words">
          {user.email}
        </p>

        <Link href="/Updateprofile" className="block w-full">
          <button className="mt-4 sm:mt-5 w-full py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition text-sm sm:text-base">
            Update Profile
          </button>
        </Link>

      </div>

    </div>
  )
}

export default ProfilePage