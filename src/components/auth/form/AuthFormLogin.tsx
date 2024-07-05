"use client";
import { AuthFormLoginSchema } from "@/models/Auth";
import { AuthApi } from "@/services/AuthApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const { loginAuth } = AuthApi();

const AuthFormLogin = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });

  const handleLogin = async (formData: AuthFormLoginSchema) => {
    try {
      await loginAuth(formData.email, formData.password);

      toast.success("Logged in successfully");
      router.push("/search");
    } catch (error) {
      toast.error("Error logging in");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-600 text-center py-5">
        Log In
      </h1>
      <form
        className="flex flex-col gap-5 bg-slate-800 p-20 rounded-lg"
        onSubmit={handleSubmit(handleLogin)}
      >
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
          Login
        </button>
        <Link
          className="text-center text-white font-semibold"
          href={"/auth/register"}
        >
          You do not have an account? Sign up
        </Link>
      </form>
    </>
  );
};

export default AuthFormLogin;
