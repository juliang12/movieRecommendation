"use client";
import { AuthForm } from "@/models/Auth";
import { AuthApi } from "@/services/AuthApi";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const { registerAuth } = AuthApi()

const AuthRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "", username: '' } });

  const handleRegister = async (formData: AuthForm) => {
    try {
      await registerAuth(formData.email, formData.password, formData.username)
      toast.success('Account created successfully')
    } catch (error) {
      toast.error('Error creating account')
    }
  };

  return (
    <>
    <h1 className="text-3xl font-bold text-slate-600 text-center">Create Account</h1>
      <form className="flex flex-col gap-5 bg-slate-800 p-20 rounded-lg" onSubmit={handleSubmit(handleRegister)}>
      <input
          className="w-full px-4 py-3 rounded-lg"
          type="username"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        {errors.username && <p className="text-red-500">Email is required</p>}
        <input
          className="w-full px-4 py-3 rounded-lg"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="text-red-500">Email is required</p>}

        <input
        className="w-full px-4 py-3 rounded-lg"
          type="password"
          placeholder="Password"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password && (
          <p className="text-red-500">
            Password is required and must be at least 8 characters long
          </p>
        )}

        <button
          type="submit"
          className="py-3 px-20 bg-indigo-800 hover:bg-indigo-900 text-white text-center rounded-lg"
        >
          Register
        </button>
        {}
        <Link className="text-center text-white font-semibold" href={'/auth/login'}>Do you already have an account? log in</Link>
      </form>
    </>
  );
};

export default AuthRegisterForm;
