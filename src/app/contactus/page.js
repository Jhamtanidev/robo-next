"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } },
  };
  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.5 } },
  };
  return (
    <div className="flex min-h-screen flex-col bg-dashboard bg-cover bg-no-repeat   ">
      <div className="flex flex-1 items-center justify-center">
        <motion.div
          className="flex w-full flex-col rounded-lg bg-white bg-opacity-30 p-8 shadow-lg backdrop-blur-md backdrop-filter sm:w-96 md:w-4/5 md:flex-row lg:w-3/5"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="pr-8 md:w-1/2">
            <form>
              <motion.div className="mb-4" variants={inputVariants}>
                <label className="mb-1 block text-sm font-medium text-white">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border bg-gray-200 bg-opacity-60 px-3 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div className="mb-4" variants={inputVariants}>
                <label className="mb-1 block text-sm font-medium text-white">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border bg-gray-200 bg-opacity-60 px-3 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </motion.div>
              <motion.div className="mb-4" variants={inputVariants}>
                <label className="mb-1 block text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  className="h-32 w-full resize-none rounded-lg border bg-gray-200 bg-opacity-60 px-3 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Your message..."
                />
              </motion.div>
              {/* Other form input fields */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-contactus bg-cover bg-no-repeat md:w-1/2"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
