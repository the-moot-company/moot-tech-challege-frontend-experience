import Link from 'next/link'
import { HiOutlinePlus } from 'react-icons/hi'

export default function Footer() {
  return (
    <>
      <div data-theme="light" className="justify-center self-center flex">
        <footer className="block m-0 m-auto max-w-5xl w-full bg-base-100 mx-8 md:0 pb-16 md:pb-0">
          <div className="grid relative tablet:grid-cols-[360px_repeat(2,_1fr)] grid-cols-[1fr] pt-[20px] gap-[20px] lg:gap-[60px] tablet:gap-[100px] pb-[10px] lg:pb-[40px] mb-10">
            <ul className="list-none block text-lg tablet:border-0 pt-[20px] tablet:pt-0 border-t-[1px] border-[rgba(0,0,0,.05)]">
              <li className="flex mb-[10px] leading-none text-[14px] sm:text-[18px] tablet:text-base">
                <span className="font-bold antialised">Moot</span>
              </li>
              <li className="flex antialised opacity-60 text-[14px] sm:text-[16px] tablet:text-base">
                We’re an async software company that builds soulful software for
                remote teams. We believe that work and life are one and all, and
                that the freedom of remote work goes hand in hand with creating
                great things.
              </li>
            </ul>
            <ul className="hidden lg:block list-none block text-lg tablet:border-0 pt-[20px] tablet:pt-0 border-t-[1px] border-[rgba(0,0,0,.05)] lg:pl-24 visible">
              <li className="flex mb-[10px] leading-none text-[14px] sm:text-[18px] tablet:text-base">
                <span className="font-bold antialised">About</span>
              </li>
              {/* <li className="flex mb-[10px] text-[14px] sm:text-[16px] tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60">
                <Link href="#pricing">Pricing</Link>
              </li> */}
              <li className="flex mb-[10px] text-[14px] sm:text-[16px] tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60">
                <Link href="/blocks">
                  <div className="flex flex-row items-center">
                    <p>Blocks</p>
                    {/* <span className="ml-1 opacity-60 h-[16px] px-[6px] py-[4px] rounded-[6px] text-[8px] bg-[rgb(0,0,0,.1)] justify-center flex items-center">
                      SOON
                    </span> */}
                  </div>
                </Link>
              </li>
              <li className="flex mb-[10px] text-[14px] sm:text-[16px] tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60">
                <Link href="/careers">Careers</Link>
              </li>
              <li className="flex mb-[10px] text-[14px] sm:text-[16px] tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="flex mb-[10px] text-[14px] sm:text-[16px] tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="flex mb-[10px] text-[14px] sm:text-[16px] tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60">
                <Link href="/faqs">FAQ</Link>
              </li>
              {/* <li className="flex mb-[10px] text-[14px] sm:text-[16px] tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60">
              <Link href="/privacy">Customers</Link>
            </li> */}
              {/* <li className="flex mb-[10px] text-[14px] sm:text-[16px] tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60">
              <Link href="">
                <div className="flex flex-row items-center">
                  <p>Our Story</p>
                  <span className="ml-1 opacity-60 h-[16px] px-[6px] py-[4px] rounded-[6px] text-[8px] bg-[rgb(0,0,0,.1)] justify-center flex items-center">
                    SOON
                  </span>
                </div>
              </Link>
            </li> */}
            </ul>
            <ul className="hidden lg:block list-none block text-lg tablet:border-0 pt-[20px] tablet:pt-0 border-t-[1px] border-[rgba(0,0,0,.05)] lg:pl-20 visible">
              <li className="flex mb-[10px] leading-none text-[14px] sm:text-[18px] tablet:text-base">
                <span className="font-bold antialised">Socials</span>
              </li>
              <li className="flex mb-[10px]">
                <a
                  className="cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60 text-[14px] sm:text-[16px] tablet:text-base"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://join.slack.com/t/moot-ers/shared_invite/zt-15v0tp4qd-JdxZtyZOmE7wgZPKhktp4w"
                >
                  Slack
                </a>
              </li>
              <li className="flex mb-[10px]">
                <a
                  className="cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60 text-[14px] sm:text-[16px] tablet:text-base"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/usemoot"
                >
                  Twitter
                </a>
              </li>
              <li className="flex mb-[10px]">
                <a
                  className="cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60 text-[14px] sm:text-[16px] tablet:text-base"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/company/moot-building-workshop/"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex mb-[10px]">
                <a
                  className="cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60 text-[14px] sm:text-[16px] tablet:text-base"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/moot_hq"
                >
                  Instagram
                </a>
              </li>
              {/* <li className="flex mb-0">
                <a
                  className="cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60 text-[14px] sm:text-[16px] tablet:text-base"
                  href="#"
                >
                  Instagram
                  <span className="ml-[3px] opacity-60 h-[20px] px-[6px] py-[4px] rounded-[6px] text-[8px] bg-[rgb(0,0,0,.1)]">
                    SOON
                  </span>
                </a>
              </li> */}
            </ul>
            <details className="lg:hidden pointer-cursor pt-[20px] border-t-[1px] border-[rgba(0,0,0,.05)]">
              <summary className="justify-between flex text-[14px] sm:text-[18px] tablet:text-base font-medium leading-tight focus:outline-none transition duration-150 ease-in-out">
                <span className="font-bold antialised">About</span>
                <HiOutlinePlus className="mr-4 lg:hidden" />
              </summary>
              <div className="collapse" id="collapseExample">
                <ul className="mt-4 list-none block text-lg tablet:border-0 tablet:pt-0 lg:pl-24 visible">
                  <li className="flex mb-[10px] text-[14px] sm:text-[16px] tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60">
                    <Link href="/blocks">
                      <div className="flex flex-row items-center">
                        <p>Blocks</p>
                        {/* <span className="ml-1 opacity-60 h-[16px] px-[6px] py-[4px] rounded-[6px] text-[8px] bg-[rgb(0,0,0,.1)] justify-center flex items-center">
                          SOON
                        </span> */}
                      </div>
                    </Link>
                  </li>
                  <li className="flex mb-[10px] text-[14px] sm:text-[16px] tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="flex mb-[10px] text-[14px] sm:text-[16px] tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60">
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li className="flex mb-[10px] text-[14px] sm:text-[16px] tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60">
                    <Link href="/faqs">FAQ</Link>
                  </li>
                  {/* <li className="flex mb-[10px] text-[14px] sm:text-[16px] tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60">
              <Link href="/privacy">Customers</Link>
            </li> */}
                  {/* <li className="flex mb-[10px] text-[14px] sm:text-[16px] tablet:text-base cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60">
              <Link href="">
                <div className="flex flex-row items-center">
                  <p>Our Story</p>
                  <span className="ml-1 opacity-60 h-[16px] px-[6px] py-[4px] rounded-[6px] text-[8px] bg-[rgb(0,0,0,.1)] justify-center flex items-center">
                    SOON
                  </span>
                </div>
              </Link>
            </li> */}
                </ul>
              </div>
            </details>
            <details className="lg:hidden pointer-cursor pt-[20px] border-t-[1px] border-[rgba(0,0,0,.05)]">
              <summary className="justify-between flex text-[14px] sm:text-[18px] tablet:text-base font-medium leading-tight focus:outline-none transition duration-150 ease-in-out">
                <span className="font-bold antialised">Socials</span>
                <HiOutlinePlus className="mr-4 lg:hidden" />
              </summary>
              <div className="collapse" id="collapseExample">
                <ul className="mt-4 list-none block text-lg tablet:border-0 tablet:pt-0 lg:pl-24 visible">
                  <li className="flex mb-[10px]">
                    <a
                      className="cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60 text-[14px] sm:text-[16px] tablet:text-base"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://twitter.com/usemoot"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="flex mb-[10px]">
                    <a
                      className="cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60 text-[14px] sm:text-[16px] tablet:text-base"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/company/moot-building-workshop/"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex mb-[10px]">
                    <a
                      className="cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60 text-[14px] sm:text-[16px] tablet:text-base"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://join.slack.com/t/moot-ers/shared_invite/zt-15v0tp4qd-JdxZtyZOmE7wgZPKhktp4w"
                    >
                      Slack
                    </a>
                  </li>
                  {/* <li className="flex mb-0">
                <a
                  className="cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300 hover:ease-in-out opacity-60 text-[14px] sm:text-[16px] tablet:text-base"
                  href="#"
                >
                  Instagram
                  <span className="ml-[3px] opacity-60 h-[20px] px-[6px] py-[4px] rounded-[6px] text-[8px] bg-[rgb(0,0,0,.1)]">
                    SOON
                  </span>
                </a>
              </li> */}
                </ul>
              </div>
            </details>
          </div>
          <div className="flex flex-row justify-between">
            <a className="flex opacity-60 text-2xs md:text-xs pb-14">
              © Moot Company 2022
            </a>
            <div className="flex flex-row">
              <Link href="/blog/building-moot">
                <a className="flex opacity-60 text-2xs md:text-xs pb-2 mr-4">
                  Made with ❤️
                </a>
              </Link>
              <Link href="/terms">
                <a className="flex opacity-60 text-2xs md:text-xs pb-2 mr-4">
                  Terms
                </a>
              </Link>
              <Link href="/privacy">
                <a className="flex opacity-60 text-2xs md:text-xs pb-2">
                  Privacy
                </a>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

//mobile colored nav bar with line beneath
//font on moot bit bigger to line up with footer
//put 'soon' on all of the about and socials

// grid-cols-[360px_repeat(2,_1fr)]
