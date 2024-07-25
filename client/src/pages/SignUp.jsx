import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="container flex  px-28  relative ">
      <div className="w-1/2">
        <section className="  dark:bg-gray-900">
          <div className="flex flex-col items-center mt-8 justify-center mx-auto  lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-2 md:space-y-0 sm:p-6  ">
                <div className=" flex justify-center">
                  <div className="text-xl relative w-28 py-1 text-minBlue font-bold text-[26px] ">
                    <span className="text-darkYellow text-[26px] ">Sign</span>Up
                    <div className="absolute  right-[1px] top-[0px] ">
                      <img src="cap.png" alt="" width={30} height={30} />
                    </div>
                  </div>
                </div>

                <form className="space-y-2 md:space-y-1">
                  {/* name */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="email"
                      className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name"
                      required=""
                    />
                  </div>
                  {/* email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="password"
                      placeholder="email"
                      className=" border focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  {/* password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="••••••••"
                      className=" border focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  {/* confirm-password */}
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="••••••••"
                      className="border focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  {/* account type */}
                  <div className="py-2">
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Account type
                    </label>
                    <div className="grid grid-cols-2 gap-1 bg-white">
                      <Button
                        type="button"
                        className={`bg-white border col-span-1 focus:bg-primary hover:text-white  focus:text-white ${
                          "active" == "Student"
                            ? "bg-primary text-white"
                            : "bg-white text-black"
                        }  "
                 `}
                      >
                        Student
                      </Button>
                      <Button
                        type="button"
                        className={`bg-white border focus:bg-primary hover:text-white focus:text-white ${
                          "active" == "Instructor"
                            ? "bg-primary text-white"
                            : "bg-white text-black"
                        }  "
                 `}
                      >
                        Instructor
                      </Button>
                    </div>
                  </div>

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      href="/sign-in"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      <span className="text-primary text-semibold">
                        Login here
                      </span>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="absolute  top-14 bottom-4 right-28">
        <img
          src="https://res.cloudinary.com/dyxt9lvpu/image/upload/v1721926836/Layer_12_icixhl.png"
          alt=""
          width={500}
          height={400}
        />
      </div>
    </div>
  );
}

export default SignUp;
