"use client"
import Link from 'next/link';
import { authClient } from '../lib/auth-client';

const Navber = () => {
  const { data: session, isPending } = authClient.useSession()
  const userdata = session?.user

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
              </svg>
            </div>
          </div>
          <a className="btn btn-ghost text-xl">SkillSphere</a>
        </div>
        
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 flex gap-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/Course"}>Course</Link>
            {userdata? <Link href={"/My_Prfile"}>My Profile</Link> : " "}
          </ul>
        </div>
        
        <div className="navbar-end flex gap-3 items-center">
          {isPending ? ("Loding....")
          : userdata? (
            <>
              
              <div className="hidden md:block">
                <h4 className="text-sm font-semibold max-w-[150px] truncate">
                  {userdata.name}
                </h4>
              </div>
              
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 h-10 rounded-full">
                  <img
                    alt={userdata.name || "User avatar"}
                    src={userdata.image}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
               <Link href='/' className="btn btn-primary" onClick={async() => await authClient.signOut()}>Logout</Link>
            </>
             
          ):
          
          
            (<Link href='/Login' className="btn btn-primary">Login</Link>)
         }
        </div>
      </div>
    </div>
  );
};

export default Navber;