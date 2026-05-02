"use client"
import { useForm } from "react-hook-form"
import { authClient } from "../lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import React from 'react';
import { reddit } from "better-auth";
import Link from "next/link";

const Loginpage = () => {
    const { register, handleSubmit } = useForm()
    const router = useRouter();

    const handlesinup = async (data) => {
        const { email, password } = data

        const { data: result, error } = await authClient.signIn.email({
            email: email,  
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            alert(error.message);
        } else {
            alert("Success:", result);
        }
        if(result){
            redirect("/")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handlesinup)} className='flex justify-center items-center'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-10">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input {...register("email", { required: true })} type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input {...register("password", { required: true, minLength: 8 })} type="password" className="input" placeholder="Password" />
                            <Link href={"/Singing"} className=" text-red-800"><p>Resigeter</p></Link> 
                    <button className="btn btn-neutral mt-4" type="submit">
                        Login
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default Loginpage;