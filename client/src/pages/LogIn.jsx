import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
    <div className="container flex  px-28  relative ">
    <div className="w-1/2">
      <section className="  dark:bg-gray-900">
        <div className="flex flex-col items-center mt-20 mx-auto  lg:py-0">
          <div className="w-full bg-white h-96 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-2  md:space-y-0 sm:p-6  ">
              <div className=" flex justify-center">
                <div className="text-xl relative w-28 py-1 text-minBlue font-bold text-[26px] ">
                  <span className="text-darkYellow text-[26px] ">Sign</span> In
                  <div className="absolute  right-[1px] top-[0px] ">
                    <img src="cap.png" alt="" width={30} height={30} />
                  </div>
                </div>
              </div>

              <form className="space-y-2 flex flex-col gap-4 md:space-y-1">
             
                
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
                <div className='flex justify-center'>
                <Button variant="square" className="w-44">
                  Submit
                </Button>
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
    <div className="absolute hidden md:block top-14 bottom-4 right-28">
      <img
        src="https://res.cloudinary.com/dyxt9lvpu/image/upload/v1721926836/Layer_12_icixhl.png"
        alt=""
        width={500}
        height={400}
      />
    </div>
  </div>
  )
}

export default LogIn