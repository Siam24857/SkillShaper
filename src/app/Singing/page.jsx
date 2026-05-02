"use client"
import { useForm } from "react-hook-form"
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
 

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
            alert("Error:", error.message);
        } else {
            alert("Success:", result);
        }
        if(result){
            redirect("/Login")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handlesinup)} className='flex justify-center items-center'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-10">
                    <legend className="fieldset-legend">Sign Up</legend>

                    <label className="label">Name</label>
                    <input {...register("name", { required: true })} type="text" className="input" placeholder="Name" />

                    <label className="label">Image Link</label>
                    <input {...register("image")} type="text" className="input" placeholder="Image URL" />

                    <label className="label">Email</label>
                    <input {...register("email", { required: true })} type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input {...register("password", { required: true, minLength: 8 })} type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4" type="submit">
                        Sign Up
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default Singin;