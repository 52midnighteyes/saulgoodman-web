"use client";

import { Formik, Form, FormikProps } from "formik";
import { ILoginArgs } from "./types";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { loginSchema } from "./loginSchema";
import { Input } from "@/components/ui/input";
import { LoginService } from "@/features/auth/api/post.auth";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/login/auth.store";
export default function LoginForm() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  const onAuthSuccess = useAuthStore((state) => state.onAuthSuccess);

  const initialValues: ILoginArgs = {
    username: "",
    password: "",
  };

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleSubmit = async ({ username, password }: ILoginArgs) => {
    try {
      const response = await LoginService({ username, password });
      const user = response.data.data;

      onAuthSuccess({
        uuid: user.id,
        username: user.username,
        role: user.role,
      });

      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      {(props: FormikProps<ILoginArgs>) => {
        const { values, errors, touched, handleChange } = props;
        return (
          <Form>
            <div className="w-[320px] flex flex-col gap-5 p-6 rounded-2xl bg-white border border-gray-300 text-black shadow-md hover:shadow-yellow-500/10 transition">
              <h2 className="font-bold text-2xl text-center text-[#FFD700]">
                Log In to Win.
              </h2>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="username" className="text-sm font-semibold">
                  Username
                </label>
                <Input
                  name="username"
                  id="username"
                  value={values.username}
                  onChange={handleChange}
                  ref={usernameRef}
                  className="rounded-2xl pl-3 pr-10"
                  placeholder="Enter your username"
                />
                <div className="min-h-4 text-xs text-red-500 ml-1">
                  {touched.username && errors.username && `*${errors.username}`}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-sm font-semibold">
                  Password
                </label>
                <div className="relative w-full">
                  <Input
                    name="password"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange}
                    className="rounded-2xl pl-3 pr-10"
                    placeholder="Enter your password"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-[#a0a0a0] hover:text-white cursor-pointer"
                  >
                    {showPassword ? <Eye /> : <EyeClosed />}
                  </span>
                </div>
                <div className="min-h-4 text-xs text-red-500 ml-1">
                  {touched.password && errors.password && `*${errors.password}`}
                </div>
              </div>

              <Button
                type="submit"
                className="mt-2 w-full bg-[#FFD700] text-[#2D2D2D] font-bold hover:bg-[#e6c200] rounded-2xl"
              >
                Log In
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
