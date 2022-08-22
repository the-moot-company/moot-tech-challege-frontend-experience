import { useEffect, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
// import { supabase } from '~/lib/supabase'

// use hot toast instead
import React from 'react'
import { AiOutlineGoogle } from 'react-icons/ai'
import { HiOutlineArrowRight } from 'react-icons/hi'

type SignUpFieldProps = {
  email: string
  password: string
}

const FORM_VALUES: SignUpFieldProps = {
  email: '',
  password: '',
}

const LoginPage = () => {
  // const [isSignIn, setIsSignIn] = useState(true)
  const [isSignIn] = useState(true)


  const [userLoaded, setUserLoaded] = useState(false)

  return (
    <React.Fragment>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div
        data-theme="light"
        className="h-screen flex flex-col justify-center items-center relative bg-base-100"
      >
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md flex flex-col justify-center">
          <div className="opacity-100">
            <nav className="fixed flex items-center top-0 left-0 right-0 z-[900] px-[18px] h-[70px] lg:px-[30px] bg-[#fafafc] md:bg-opacity-0">
              <div className="w-full justify-between flex items-center">
                <a className="cursor-pointer" href="/">
                  <div className="flex">
                    <div className="flex flex-col justify-center">
                      <h1 className="flex text-2xl font-bold antialised">
                        Moot
                      </h1>
                    </div>
                  </div>
                </a>
              </div>
            </nav>
          </div>
          <div className="mb-2 flex justify-center">
            <Image
              className="h-16 w-auto rounded-2xl shadow-md flex"
              src="/images/logo-large.png"
              alt="Moot Logo"
              width={60}
              height={60}
            />
          </div>
          <div className="text-center pb-4">
            <h2 className="text-4xl font-extrabold tracking-tight">Sign in</h2>
            <p className="mt-2 text-base max-w-2xl flex flex-row justify-center">
              <span className="opacity-60">Or </span>
              <a
                href="https://calendly.com/james-se/10-min"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-primary font-medium opacity-100 flex flex-row items-center ml-1">
                  book a demo <HiOutlineArrowRight size={12} className="ml-1" />
                </span>
              </a>
            </p>
          </div>
          <div className="bg-base-200 py-8 px-4 shadow-md sm:rounded-lg sm:px-10 rounded-2xl border border-base-300">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="bg-base-100 appearance-none block w-full px-3 py-2 border border-base-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="bg-base-100 appearance-none block w-full px-3 py-2 border border-base-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-bg-100 bg-base-200 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 btn btn-primary"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t " />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-base-200">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1">
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium btn btn-primary"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <AiOutlineGoogle size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoginPage
