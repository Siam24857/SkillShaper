"use client"
import { useForm } from "react-hook-form"
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

const Singin = () => {
    const { register, handleSubmit } = useForm()

    const handlesinup = async (data) => {
        const { name, email, password, image } = data
        console.log(data)

        const { data: result, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: image,
            callbackURL: "/Login"
        });

        if (error) {
            toast("Error:", error.message);
        } else {
            toast("Success:", result);
        }
        if(result){
            redirect("/Login")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-5 lg:px-6">
            <form onSubmit={handleSubmit(handlesinup)} className='flex justify-center items-center w-full'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-[90%] sm:max-w-sm md:max-w-sm lg:max-w-sm border p-4 sm:p-5 md:p-6 lg:p-6 m-2 sm:m-4 md:m-6 lg:m-10">
                    <legend className="fieldset-legend text-lg sm:text-xl md:text-xl lg:text-xl font-semibold">Sign Up</legend>

                    <label className="label text-sm sm:text-base">Name</label>
                    <input {...register("name", { required: true })} type="text" className="input w-full text-sm sm:text-base p-2 sm:p-3" placeholder="Name" />

                    <label className="label text-sm sm:text-base">Image Link</label>
                    <input {...register("image")} type="text" className="input w-full text-sm sm:text-base p-2 sm:p-3" placeholder="Image URL" />

                    <label className="label text-sm sm:text-base">Email</label>
                    <input {...register("email", { required: true })} type="email" className="input w-full text-sm sm:text-base p-2 sm:p-3" placeholder="Email" />

                    <label className="label text-sm sm:text-base">Password</label>
                    <input {...register("password", { required: true, minLength: 8 })} type="password" className="input w-full text-sm sm:text-base p-2 sm:p-3" placeholder="Password" />

                    <button className="btn btn-neutral mt-4 w-full text-sm sm:text-base py-2 sm:py-3" type="submit">
                        Sign Up
                    </button>
                     <ToastContainer position="top-center" />
                </fieldset>
            </form>
        </div>
    );
};

export default Singin;