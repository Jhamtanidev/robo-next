"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import cn from "classnames";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useAuth, VIEWS } from "../AuthProvider";
import supabase from "src/lib/supabase-browser";
import {
  FaFacebook,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import SignUp from "./SignUp";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SignIn = () => {
  const { setView } = useAuth();
  const [errorMsg, setErrorMsg] = useState(null);

  const [isSignUp, setIsSignUp] = useState(false);

  async function signIn(formData) {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 bg-dashboard font-montserrat text-white">
      <div className="w-full max-w-md">
        <div
          className="rounded-lg bg-white p-8 shadow-md"
          style={{
            background:
              "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
          }}
        >
          <div className="text-center">
            {isSignUp ? (
              <>
                <h2 className="mb-4 text-2xl font-semibold text-white ">
                  Sign Up
                </h2>
                <p className="text-white">Create an account to get started.</p>
              </>
            ) : (
              <>
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  Sign In
                </h2>
                <p className="text-white">Welcome back! Please sign in.</p>
              </>
            )}
          </div>

          {isSignUp ? (
            <SignUp />
          ) : (
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={signIn}
            >
              {({ errors, touched }) => (
                <Form className="w-full p-4 ">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="mb-2 block rounded text-sm font-bold text-white"
                    >
                      Email
                    </label>
                    <Field
                      className={cn(
                        "input focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-black  focus:outline-none",
                        errors.email && touched.email && "bg-red-50"
                      )}
                      id="email"
                      name="email"
                      placeholder="jane@acme.com"
                      type="email"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-xs text-red-600">{errors.email}</div>
                    ) : null}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="mb-2 block rounded text-sm font-bold text-white"
                    >
                      Password
                    </label>
                    <Field
                      className={cn(
                        "input focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-black focus:outline-none",
                        errors.password && touched.password && "bg-red-50"
                      )}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="***********"
                    />
                    {errors.password && touched.password ? (
                      <div className="text-xs text-red-600">
                        {errors.password}
                      </div>
                    ) : null}
                  </div>

                  <div className="text-black-700 mb-6 flex items-center text-sm">
                    <input type="checkbox" name="Remember" className="mr-2" />
                    <label htmlFor="Remember">Remember me</label>
                  </div>

                  <button
                    className="link mb-4 block text-sm text-white"
                    type="button"
                    onClick={() => setView(VIEWS.FORGOTTEN_PASSWORD)}
                    // href='/auth/resetpassword'
                  >
                    Forgot password?
                  </button>

                  <button
                    className="w-full rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700"
                    type="submit"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          )}

          <div className="mt-6 text-center">
            <p className="text-black-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <span
                className="ml-2 cursor-pointer text-blue-300"
                onClick={() => setIsSignUp(!isSignUp) }
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
