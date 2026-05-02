"use client"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast, ToastContainer } from "react-toastify"
import { FaGoogle } from "react-icons/fa"
import { authClient } from "../lib/auth-client"

const Loginpage = () => {
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  const onSubmit = async (data) => {
    const { email, password} = data

    const { error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/",
    })

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success("Login successful")
    router.push("/")
  }

  const googleSignin = async() => {
       await authClient.signIn.social({
         provider: "google",
  });
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm bg-base-200 p-6 rounded-lg"
      >

        <h2 className="text-xl font-bold mb-4 text-center">
          Login
        </h2>

        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
          className="input w-full mb-3"
        />

        <input
          {...register("password", { required: true, minLength: 8 })}
          type="password"
          placeholder="Password"
          className="input w-full mb-3"
        />
        

        <Link href="/Singing" className="text-red-600 text-sm">
          Register
        </Link>

        <button className="btn btn-neutral w-full mt-3" type="submit">
          Login
        </button>

        <button
          type="button"
          onClick={googleSignin}
          className="btn w-full flex items-center gap-2 mt-3"
        >
          <FaGoogle /> Google Login
        </button>

      </form>

      <ToastContainer position="top-center" />

    </div>
  )
}

export default Loginpage