"use client";

import { Formik, Form, FormikProps } from "formik";
import { useState } from "react";
import { IRegisterArgs } from "./register.interface";
import { registerSchema } from "./register.schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { RegisterService } from "@/features/auth/api/post.auth";

export default function RegisterForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues: IRegisterArgs = {
    username: "",
    email: "",
    password: "",
    role: "user",
  };

  const handleSubmit = async (values: IRegisterArgs) => {
    try {
      await RegisterService(values);
      router.push("/pages/auth/login");
    } catch (error: any) {
      setErrorMessage(error?.message || "Something went wrong.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      {(props: FormikProps<IRegisterArgs>) => {
        const { values, errors, touched, handleChange, setFieldValue } = props;
        return (
          <Form>
            <div className="w-full max-w-md mx-auto flex flex-col gap-5 p-8 rounded-3xl bg-white border border-gray-300 text-black shadow-lg">
              <h2 className="font-bold text-3xl text-center text-[#FFD700] tracking-tight">
                Create Account
              </h2>

              {errorMessage && (
                <div className="text-sm text-red-500 text-center">
                  {errorMessage}
                </div>
              )}

              {/* Username */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <Input
                  id="username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  className="rounded-xl"
                />
                <div className="text-xs text-red-500 min-h-[1rem] ml-1">
                  {touched.username && errors.username && `*${errors.username}`}
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="rounded-xl"
                />
                <div className="text-xs text-red-500 min-h-[1rem] ml-1">
                  {touched.email && errors.email && `*${errors.email}`}
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="rounded-xl"
                />
                <div className="text-xs text-red-500 min-h-[1rem] ml-1">
                  {touched.password && errors.password && `*${errors.password}`}
                </div>
              </div>

              {/* Role */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Role
                </label>
                <Select
                  value={values.role}
                  onValueChange={(val) => setFieldValue("role", val)}
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Choose role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-xs text-red-500 min-h-[1rem] ml-1">
                  {touched.role && errors.role && `*${errors.role}`}
                </div>
              </div>

              {/* Button */}
              <Button
                type="submit"
                className="mt-4 w-full bg-[#FFD700] text-[#2D2D2D] font-bold hover:bg-[#e6c200] rounded-xl py-2"
              >
                Register
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
