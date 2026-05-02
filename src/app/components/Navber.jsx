"use client"
import Link from 'next/link';
import { authClient } from '../lib/auth-client';
 
 

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user

 

  const handleLogout = async () => {
    await authClient.signOut()
  }

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 ">

   
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            ☰
          </div>

          <ul tabIndex={0} className="menu dropdown-content bg-base-100 p-2 shadow rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Course">Course</Link></li>
            {user && <li><Link href="/My_profile">My Profile</Link></li>}
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost text-lg">
          SkillSphere
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/Course">Course</Link>
        {user && <Link href="/My_profile">My Profile</Link>}
      </div>

      {/* RIGHT */}
      <div className="navbar-end flex gap-3 items-center">

        {isPending ? (
          <span className="loading loading-spinner"></span>
        ) : user ? (
          <>
            <span className="hidden sm:block font-medium max-w-[120px] truncate">
              {user.name}
            </span>

            {/* Avatar */}
            <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              {user.image ? (
                <img
                  src={user.image}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm font-semibold">
                  {user.name?.[0]?.toUpperCase()}
                </span>
              )}
            </div>

            <button onClick={handleLogout} className="btn btn-sm">
              Logout
            </button>
          </>
        ) : (
          <Link href="/Login" className="btn btn-sm">
            Login
          </Link>
        )}

      </div>

    </div>
  )
}

export default Navbar