import Link from 'next/link'
import { useState, useEffect } from 'react'

import {
  HiChevronDown,
  HiMenu,
  HiOutlineX,
  HiOutlinePlus,
} from 'react-icons/hi'

import Footer from './Footer'

const Container = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  // on render, set listener
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => {
      window.removeEventListener('scroll', listenToScroll)
    }
  }, [])

  const listenToScroll = () => {
    let heightToShowFrom = 400
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll > heightToShowFrom) {
      // isVisible && // to limit setting state only the first time
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const toggleMobileMenu = () => {
    console.log('mobile menu toggle')
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { children } = props

  return (
    <div>
      <div className="opacity-100" data-theme="light">
        <nav className="flex items-center top-0 left-0 right-0 z-[900] px-[18px] h-[70px] lg:px-[30px] md:bg-opacity-0 animate-fade-in-down">
          {isVisible ? (
            <div className="w-full justify-between flex items-center z-10 fixed top-3 animate-fade-in-down">
              <div className="flex"></div>
              <div className="hidden md:block px-[6px] ml-[2px]">
                <Link href="https://calendly.com/james-se/10-min">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="mr-9 btn btn-primary btn-md shadow-md lg:mr-11"
                  >
                    Book a demo
                  </a>
                </Link>
              </div>
            </div>
          ) : null}
          <div className="w-full justify-between flex items-center">
            <Link href="/">
              <a className="flex cursor-pointer">
                {/* <div className="flex mr-2 lg:w-[40px] items-center justify-center drop-shadow-[0_0_5px_rgb(0_0_0_/_0.20)]">
                  <Image
                    alt="logo"
                    height={36}
                    width={36}
                    src="/images/logo.png"
                    className=""
                  />
                </div> */}
                <div className="flex flex-row justify-center items-center">
                  <h2 className="flex text-2xl font-bold antialised">Moot</h2>
                  {/* <span className="ml-1.5 opacity-100 h-[20px] px-[8px] py-[4px] rounded-lg text-[12px] bg-base-300 justify-center flex items-center">
                    beta
                  </span> */}
                </div>
              </a>
            </Link>
            <div className="flex items-center">
              {/* <div className="px-[16px] mr-4">
              <Link href="/pricing">
                <a className="">
                  <span className="font-medium antialised cursor-pointer hidden md:block">
                    Pricing
                  </span>
                </a>
              </Link>
            </div> */}
              <div className="px-[16px] dropdown dropdown-hover dropdown-end hidden md:block">
                <label className="font-medium antialised cursor-pointer mr-1 flex flex-row items-center">
                  Community
                  <HiChevronDown />
                </label>
                <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-80">
                  <li>
                    <a
                      className="flex flex-col items-start"
                      href="https://twitter.com/moot_hq"
                    >
                      <p className="-mb-2">+ Twitter</p>
                      <p className="text-sm">
                        Keep up to date with all things Moot.
                      </p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex flex-col items-start"
                      href="https://join.slack.com/t/moot-ers/shared_invite/zt-15v0tp4qd-JdxZtyZOmE7wgZPKhktp4w"
                    >
                      <p className="-mb-2">+ Slack</p>
                      <p className="text-sm">
                        A Slack community for all things remote.
                      </p>
                    </a>
                  </li>
                  <li className="disabled">
                    <a className="flex flex-col items-start">
                      <p className="-mb-2">+ Podcast</p>
                      <p className="text-sm text-base-300">
                        A 15 minute sound bite interviewing the best remote
                        founders operators, builders in the world.
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="px-[16px] dropdown dropdown-hover dropdown-end hidden md:block">
                <label className="font-medium antialised cursor-pointer mr-1 flex flex-row items-center">
                  Company
                  <HiChevronDown />
                </label>
                <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48">
                  <li>
                    <Link href="/blog">+ Blog</Link>
                  </li>
                  <li>
                    <Link href="/faqs">+ FAQ</Link>
                  </li>
                  <li>
                    <Link href="/careers">+ Careers</Link>
                  </li>
                  <li>
                    <Link href="/contact">+ Contact</Link>
                  </li>
                  {/* <li className="disabled">
                    <a>+ Our Story</a>
                  </li> */}
                </ul>
              </div>
              <div className="px-[16px]">
                <Link href="/login">
                  <a className="">
                    <span className="font-medium antialised cursor-pointer hidden md:block">
                      Log in
                    </span>
                  </a>
                </Link>
              </div>
              {!mobileMenuOpen ? (
                <div className="px-[6px] ml-[2px] flex-row">
                  <Link href="https://calendly.com/james-se/10-min">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary shadow-md btn-md lg:-mr-4"
                    >
                      Book a demo
                    </a>
                  </Link>
                </div>
              ) : null}
              <div>
                {mobileMenuOpen ? (
                  <button onClick={() => toggleMobileMenu()}>
                    <HiOutlineX className="md:hidden ml-2" size={28} />
                  </button>
                ) : (
                  <button onClick={() => toggleMobileMenu()}>
                    <HiMenu className="md:hidden ml-2" size={28} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <main className="antialiased space-y-2" data-theme="light">
        {mobileMenuOpen ? (
          <div className="flex h-screen flex-col">
            <details className="lg:hidden pl-4 pointer-cursor pt-[20px]">
              <summary className="justify-between flex text-lg tablet:text-base font-medium leading-tight focus:outline-none transition duration-150 ease-in-out">
                <span className="font-bold antialised">Company</span>
                <HiOutlinePlus className="mr-4 lg:hidden" />
              </summary>
              <div className="collapse" id="collapseExample">
                <ul className="mt-4 list-none block text-lg tablet:border-0 tablet:pt-0 lg:pl-24 visible">
                  <li className="flex mb-[10px] text-lg tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out ">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/faqs">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </details>
            <details className="lg:hidden pl-4 pointer-cursor pt-[20px]">
              <summary className="justify-between text-lg flex tablet:text-base font-medium leading-tight focus:outline-none transition duration-150 ease-in-out">
                <span className="font-bold antialised">Community</span>
                <HiOutlinePlus className="mr-4 lg:hidden" />
              </summary>
              <div className="collapse" id="collapseExample">
                <ul className="mt-4 list-none block text-lg tablet:border-0 tablet:pt-0 lg:pl-24 visible">
                  <li className="flex mb-[10px]">
                    <a
                      className="cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out text-lg tablet:text-base"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://twitter.com/moot_hq"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="flex mb-[10px]">
                    <a
                      className="cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out  text-lg tablet:text-base"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://join.slack.com/t/moot-ers/shared_invite/zt-15v0tp4qd-JdxZtyZOmE7wgZPKhktp4w"
                    >
                      Slack
                    </a>
                  </li>
                  <li className="flex mb-[10px]">
                    <a
                      className="cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out text-lg tablet:text-base"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/company/moot-building-workshop/"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </details>
            <div className="px-[6px] ml-[4px] mt-[48px]">
              <Link href="https://calendly.com/james-se/10-min">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="mr-9 btn btn-primary btn-md shadow-md lg:mr-11"
                >
                  Book a demo
                </a>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            {children}
            <Footer />
          </div>
        )}
      </main>
    </div>
  )
}

export default Container
