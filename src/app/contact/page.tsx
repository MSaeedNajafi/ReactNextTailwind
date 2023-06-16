"use client";

import { usePathname } from "next/navigation";
import Layout from "../components/Layout";
export default function Page() {
  const pathname = usePathname();
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mt-8">
          Hello, Contact page!
        </h1>
        <p className="text-center mt-4">This is a sample home page.</p>
        <p className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8  dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">
            Current pathname: {pathname}
          </code>{" "}
        </p>
      </div>
      <div className="relative flex flex-col justify-center  p-10 overflow-hidden ">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-gray-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-indigo-700  uppercase ">
            Contact Form
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="John cooks"
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="john.cooks@example.com"
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Message</span>
                <textarea
                  name="message"
                  className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows={5}
                ></textarea>
              </label>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
              >
                Contact Us
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
