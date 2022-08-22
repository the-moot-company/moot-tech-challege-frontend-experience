import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {
  HiOutlineChevronRight,
  // HiOutlineStar
} from 'react-icons/hi'
import Container from './components/landing/Container'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useState } from 'react'
import React from 'react'

const Landing = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  // const buttonRef = React.createRef<HTMLInputElement>()

  const router = useRouter()
  const meta = {
    title: 'Moot - Contact Us.',
    description:
      'Moot is an all-in-one work hub that makes remote work a multiplayer experience, so teams can collaborate better, faster and cheaper.',
    type: 'website',
  }

  const disableButton = () => {
    // buttonRef.current.disabled = true // this disables the button
  }

  const submitPair = { name: name, email: email, message: message }

  const submitContact = () => {
    if (email.length > 3 && name.length > 1 && message.length > 1) {
      disableButton()
      console.log(submitPair)
      //send email to spreadsheet
      axios
        .post(
          'https://sheet.best/api/sheets/872678c2-d49f-4e3c-a0ac-21f58e7a6a77',
          submitPair
        )
        .then((response) => {
          console.log(response)
        })
      toast.success("Great, thanks — we've got you! Please check your inbox.", {
        duration: 8000,
      })
    } else {
      toast.error('Something went wrong', {
        duration: 8000,
      })
    }
  }

  return (
    <>
      <NextSeo
        title="Moot"
        description="Moot is an all-in-one work hub that makes remote work a multiplayer experience, so teams can collaborate better, faster and cheaper. Contact Us"
        canonical="https://www.trymoot.com/contact"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: `trymoot.com/contact`,
          title: 'Moot - The all-in-one workspace for remote teams',
          description:
            'Moot is an all-in-one work hub that makes remote work a multiplayer experience, so teams can collaborate better, faster and cheaper.',
          images: [
            {
              url: `https://trymoot.com/images/moot-image-open-graph.png`,
              alt: 'Moot - The all-in-one workspace for remote teams',
              width: 1280,
              height: 720,
            },
          ],
          site_name: 'Moot',
        }}
        twitter={{
          handle: '@moot_hq',
          site: '@moot_hq',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta
          property="og:url"
          content={`https://www.trymoot.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.trymoot.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Moot" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div
          data-theme="light"
          className="bg-base-100 pb-8 sm:pb-12 lg:pt-12 lg:pb-24"
        >
          <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-4">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="h-11 w-11 aspect-1 shadow-md rounded-xl">
                  <Image
                    src="/images/logo.png"
                    alt="Moot Logo"
                    width={468}
                    height={470}
                  />
                </div>
                <div className="mt-8">
                  <div>
                    <Link href="/blog/building-moot">
                      <div>
                        <span className="rounded bg-base-200 px-2.5 py-1 text-xs font-semibold text-primary tracking-wide uppercase">
                          What's new
                        </span>
                        <span className="inline-flex items-center text-sm font-medium text-primary space-x-1 cursor-pointer ml-2">
                          <span>Private Beta!</span>
                          <HiOutlineChevronRight
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-4 sm:max-w-xl">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                      The all-in-one workspace for remote teams
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                      Moot is an all-in-one work hub that makes remote work a
                      multiplayer experience, so teams can collaborate better,
                      faster and cheaper.
                    </p>
                  </div>
                  {/* <form
                    action="#"
                    className="mt-12 sm:max-w-lg sm:w-full sm:flex"
                  >
                    <div className="min-w-0 flex-1">
                      <label htmlFor="hero-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="hero-email"
                        type="email"
                        className="block w-full border border-base-300 rounded-lg px-5 py-3 text-base bg-base-100 shadow-sm focus:border-primary focus:ring-primary"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                      <button type="submit" className="btn btn-primary">
                        Get in touch
                      </button>
                    </div>
                  </form> */}
                  <form
                    action="#"
                    className="mt-6 sm:max-w-lg sm:w-full sm:flex flex-col rounded-xl border border-base-300 p-4"
                  >
                    <div className="min-w-0 flex-1 mb-2">
                      <label
                        htmlFor="hero-message"
                        className="uppercase label-text menu-title font-bold text-gray-500"
                      >
                        Name
                      </label>
                      <input
                        id="hero-name"
                        type="text"
                        className="mt-2 block w-full border border-base-300 rounded-lg px-5 py-3 text-base bg-base-100 shadow-sm focus:border-primary focus:ring-primary"
                        placeholder="Enter your name"
                        onChange={(e) => {
                          setName(e.target.value)
                        }}
                        required
                      />
                    </div>
                    <div className="min-w-0 flex-1 my-2">
                      <label
                        htmlFor="hero-email"
                        className="uppercase label-text menu-title font-bold text-gray-500"
                      >
                        Email address
                      </label>
                      <input
                        id="hero-email"
                        type="email"
                        value={email}
                        className="mt-2 block w-full border border-base-300 rounded-lg px-5 py-3 text-base bg-base-100 shadow-sm focus:border-primary focus:ring-primary"
                        placeholder="Enter your email"
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                        required
                      />
                    </div>
                    <div className="min-w-0 flex-1 my-2">
                      <label
                        htmlFor="hero-message"
                        className="uppercase label-text menu-title font-bold text-gray-500"
                      >
                        Message
                      </label>
                      <textarea
                        rows={3}
                        className="mt-2 block w-full border border-base-300 rounded-lg px-5 py-3 text-base bg-base-100 shadow-sm focus:border-primary focus:ring-primary"
                        placeholder="Enter your message"
                        onChange={(e) => {
                          setMessage(e.target.value)
                        }}
                        required
                      ></textarea>
                    </div>
                    {/* add submission link*/}
                    <div className="mt-2">
                      <button
                        data-theme="light"
                        className="btn btn-primary btn-block"
                        onClick={() => submitContact()}
                        // ref={buttonRef}
                        disabled
                      >
                        Get in touch
                      </button>
                    </div>
                  </form>
                  {/* <div className="mt-6">
                  <div className="inline-flex items-center divide-x divide-gray-300">
                    <div className="flex-shrink-0 flex pr-5">
                      <HiOutlineStar
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <HiOutlineStar
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <HiOutlineStar
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <HiOutlineStar
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <HiOutlineStar
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                      <span className="font-medium text-gray-900">
                        Rated 5 stars
                      </span>{' '}
                      by over{' '}
                      <span className="font-medium text-primary">
                        500 beta users
                      </span>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>

            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
              <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="hidden sm:block">
                  <div className="absolute inset-y-0 left-1/2 w-screen bg-base-200 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                  <svg
                    className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                    width={404}
                    height={392}
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-base-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={392}
                      fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                    />
                  </svg>
                </div>
                <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12 -mt-8">
                  <Image
                    className="w-full rounded-md shadow-xl ring-1 ring-primary-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                    src="/images/landing/workspace-hero.png"
                    alt="Moot - the all-in-one workspace for remote teams"
                    width={2688}
                    height={2536}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Landing
