"use client"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { Check } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { toast, ToastContainer } from "react-toastify";

const UpdateProfile = () => {

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      await authClient.updateUser({
        name: data.name,
        image: data.image,
      })

      toast.success("Profile Updated")

      setTimeout(() => {
        router.push("/My_profile")
      }, 1000)

    } catch (err) {
      toast.error("Update Failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        
        <h2 className="text-2xl font-semibold text-center mb-6">
          Update Profile
        </h2>

        <Form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

          <TextField>
            <Label>Name</Label>
            <Input
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            <FieldError>{errors.name?.message}</FieldError>
          </TextField>

          <TextField>
            <Label>Image URL</Label>
            <Input
              placeholder="https://example.com/image.jpg"
              {...register("image", { required: "Image URL is required" })}
            />
            <FieldError>{errors.image?.message}</FieldError>
          </TextField>

          <Button className="mt-2 w-full" type="submit">
            <Check />
            Update Profile
          </Button>

        </Form>

      </div>

      <ToastContainer position="top-center" />

    </div>
  )
}

export default UpdateProfile