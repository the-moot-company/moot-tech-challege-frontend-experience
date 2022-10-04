// TODO: Make our own inventory of app icons so that we can have styled equivalents for dashboard/side menu - could use react-icons for largest apps?

/* eslint-disable @next/next/no-img-element */
import { Fragment, FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
// import ThemeChangerButton from './ThemeChangerButton'
import { FiPlus, FiSlack } from 'react-icons/fi'
import { HiOutlineCog } from 'react-icons/hi'
import Avatar from './Avatar'
import { BsGear } from 'react-icons/bs'
import { GrStatusPlaceholderSmall } from 'react-icons/gr'
import { AiOutlineBug, AiFillEdit, AiOutlineEdit } from 'react-icons/ai'

import Link from 'next/link'
import { useRouter } from 'next/router'
import UserCard from './UserCard'

type LayoutProps = {
  usePadding?: boolean
  useBackdrop?: boolean
  useSidebar?: boolean
  profile?: any
  rooms: any[]
  editMode?: boolean
  setEditMode?: Function
  currentWorkspace?: any
  children: any
}

const FullLayout: FunctionComponent<LayoutProps> = ({
  children,
  usePadding,
  useBackdrop,
  useSidebar,
  profile,
  rooms,
  editMode,
  setEditMode,
  currentWorkspace,
}) => {
  const [otherProfiles] = useState([
    {
      users: { email: 'barney@rubble.com' },
      avatar_url:
        'https://rlv.zcache.com.au/the_flintstones_barney_rubble_mouse_pad-r55e15380384948ccafedd73e5930da06_x74vi_8byvr_307.jpg',
      username: 'Barney',
    },
  ])

  const router = useRouter()
  return (
    <Fragment>
      <main
        className={classNames(
          'w-full min-h-screen h-fit mx-auto relative flex bg-base-200',
          usePadding && 'px-2 sm:px-6 lg:px-8',
          useBackdrop && ''
        )}
      >
        <aside className="w-14 h-screen min-h-0 shrink-0 z-20 bg-base-200 border-r border-base-300 flex flex-col items-center justify-between pt-1.5 absolute top-0 left-0">
          <div className="flex flex-col items-center">
            {rooms?.map((room, index) => (
              <Link
                href={
                  '/dashboard/' +
                  profile.organization.urlSlug +
                  '/' +
                  room.urlSlug
                }
                key={index}
              >
                <a
                  className="tooltip tooltip-right tooltip-primary bg-base-200 text-neutral capitalize"
                  data-tip={`${room.name}`}
                >
                  <button
                    className={classNames(
                      'text-l btn-sm w-9 h-9 btn-square rounded-md bg-base-300 text-neutral hover:bg-base-200 my-1',
                      {
                        'bg-base-300 outline outline-primary outline-2':
                          router.query.WorkspaceSlug === room.urlSlug,
                      }
                    )}
                    // onClick={() => {
                    //   setNextRoom(room)
                    //   play()
                    //   if (currentRoomName) setSwitchWorkSpaceModalOpen(true)
                    // }}
                  >
                    {room?.emoji ? room.emoji.emoji : room.id}
                  </button>
                </a>
              </Link>
            ))}
            {profile?.is_admin && (
              <label
                htmlFor="add-workspace-modal"
                className="btn-sm h-9 w-9 rounded-md items-center justify-center flex btn-square border-0 bg-base-300 hover:bg-base-200 my-1 cursor-pointer"
              >
                <FiPlus size={14} />
              </label>
            )}
          </div>
          <div className="divider mx-2 my-0" />
          <div className="flex shrink grow min-h-0 overflow-y-scroll no-scrollbar">
            <div className="flex flex-col items-center min-h-0 mt-2">
              {otherProfiles &&
                // otherProfiles.slice(0, 6).map((entry, index) => (
                otherProfiles.map((entry, index) => {
                  return (
                    <UserCard
                      key={index}
                      entry={entry}
                      index={index}
                      rooms={rooms}
                    />
                  )
                })}
              <label
                htmlFor="settings-modal"
                className="btn-sm h-10 w-10 rounded-md items-center justify-center flex btn-square border-0 my-1 cursor-pointer"
              >
                <FiPlus size={14} />
              </label>
            </div>
          </div>
          {/* TODO: Settings button opens settings menu for profile */}
          <div className="flex flex-col items-center justify-between mt-1 mb-4">
            <div
              className="tooltip tooltip-right capitalize w-6 h-6 aspect-1 btn-square btn-xs flex items-center text-2xl border-none bg-base-200 btn btn-circle hover:bg-base-300 text-base-content"
              data-tip={'Submit Bug'}
            >
              <AiOutlineBug size={14} />
            </div>
            <label
              htmlFor="settings-modal"
              className="tooltip tooltip-right capitalize w-6 h-6 aspect-1 btn-square btn-xs flex items-center text-2xl border-none bg-base-200 btn btn-circle hover:bg-base-300 mt-2 mb-3 text-base-content"
              data-tip={'Settings'}
            >
              <HiOutlineCog size={14} />
            </label>
            <Avatar className="w-6" profile={profile} online={true} />
          </div>
        </aside>
        <aside
          className={classNames(
            'w-54 shrink-0 ease-in-out duration-300 z-0 bg-base-200 absolute flex flex-col justify-between mt-2 -left-52'
            // FLAG: drawer menu
            // { 'left-14': menuOpen },
            // { '-left-52': !menuOpen }
          )}
        >
          <div className="flex flex-col justify-between">
            <ul className="menu menu-compact text-sm rounded-box">
              <li>
                <a>
                  {currentWorkspace?.emoji?.emoji ? (
                    <span> {currentWorkspace?.emoji?.emoji}</span>
                  ) : (
                    <GrStatusPlaceholderSmall />
                  )}
                  {currentWorkspace?.name}
                </a>
              </li>
              <li>
                <label htmlFor="settings-modal">
                  <BsGear />
                  Settings and Members
                </label>
              </li>
              {/* TODO: Reinstate this when we have a changelog */}
              {/* <li>
                  <a>
                    <AiOutlineClockCircle />
                    All Updates
                  </a>
                </li> */}
              <li>
                <label htmlFor="edit-mode">
                  <a>
                    <label className="swap">
                      <input
                        id="edit-mode"
                        type="checkbox"
                        checked={editMode}
                      />
                      <AiOutlineEdit className="swap-off" />
                      <AiFillEdit className="swap-on" />
                    </label>
                  </a>
                  Edit Mode
                </label>
              </li>
            </ul>
          </div>
        </aside>
        <div
          className={classNames(
            'shrink-0 ease-in-out duration-300 absolute right-0 h-screen overflow-clip left-14 flex flex-col'
          )}
        >
          <div className="flex-grow h-12 overflow-none">{children}</div>
        </div>
      </main>
    </Fragment>
  )
}

FullLayout.defaultProps = {
  usePadding: true,
  useBackdrop: false,
  useSidebar: true,
}

export default FullLayout
