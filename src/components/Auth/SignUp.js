"use client";

import { useState } from "react";
import cn from "classnames";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { useAuth, VIEWS } from "src/components/AuthProvider";
import supabase from "src/lib/supabase-browser";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SignUp = () => {
  const { setView } = useAuth();
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  async function signUp(formData) {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg(
        "Success! Please check your email for further instructions."
      );
    }
  }

  return (
    <div className=" form-container font-mon">
      {/* <h2 className="w-full text-center">Create Account</h2> */}

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={signUp}
      >
        {({ errors, touched }) => (
          <Form className=" w-full p-4 ">
            <div className="mb-6">
              <label
                htmlFor="email"
                className='className="mb-2 text-gray-700" block rounded text-sm font-bold'
              >
                Email
              </label>
              <Field
                className={cn(
                  "input focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-black focus:outline-none",
                  errors.email && touched.email && "bg-red-50"
                )}
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
              {errors.email && touched.email ? (
                <div className="text-red-600">{errors.email}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-black-700 mb-2 block rounded text-sm font-bold"
              >
                Password
              </label>
              <Field
                className={cn(
                  "input focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-black  focus:outline-none",
                  errors.email && touched.email && "bg-red-50"
                )}
                id="password"
                name="password"
                type="password"
                placeholder="**************"
              />
              {errors.password && touched.password ? (
                <div className="text-red-600">{errors.password}</div>
              ) : null}
            </div>
            <button
              className="w-full rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className="text-red-600">{errorMsg}</div>}
      {successMsg && <div className="text-black">{successMsg}</div>}
    </div>
  );
};

export default SignUp;
