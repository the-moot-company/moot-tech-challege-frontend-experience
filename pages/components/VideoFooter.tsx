//TODO: add date/time to widget when not in room, conditionals for when in room
//TODO: separate room entry from bottom bar so we can remove widget from dashboard

/* eslint-disable @next/next/no-img-element */
// import { VideoPlayer } from './VideoPlayer'
// import { usePeer } from '~/lib/peerWithDaily'
import classnames from 'classnames'

import { HiOutlineCake, HiOutlineCog } from 'react-icons/hi'

import {
  MuteButton,
  ScreenShareButton,
  ToggleVideoAudioButton,
  VideoButton,
  VideoPositionMenu,
} from './VideoButtons'
import { useRef, useState } from 'react'
import classNames from 'classnames'

export const VideoFooter: React.FC<{
  currentWorkspace: any
  noMiniVideos?: boolean
  profile?: any
}> = ({ currentWorkspace, noMiniVideos = false, profile }) => {
  const currentRoomName = 'Main'

  const [isFullScreenOverlayShowing, setIsFullScreenOverlayShowing] =
    useState(false)

  let videos: any
  const showCall = false

  videos = <></>

  const TOP = 'top'
  const BOTTOM = 'bottom'
  const LEFT = 'left'
  const RIGHT = 'right'

  type ScreenPosition = 'top' | 'bottom' | 'left' | 'right'
  const [screenPosition, setScreenPosition] = useState<ScreenPosition>(BOTTOM)

  const videoOverLayRef = useRef<HTMLInputElement>()
  const closeFullScreen = () => {
    if (videoOverLayRef.current) {
      setIsFullScreenOverlayShowing(false)
      videoOverLayRef.current.checked = false
    }
  }

  return (
    <div
      className={classNames('flex z-50', {
        'flex-col': [TOP, BOTTOM].includes(screenPosition),
      })}
    >
      <div
        className={classnames(
          'flex group justify-center align-middle items-center bg-transparent absolute z-50',
          {
            'inset-x-1/2 top-3 flex-col': [TOP].includes(screenPosition),
          },
          {
            'flex-row-reverse inset-y-1/2 right-0 mr-5': [RIGHT].includes(
              screenPosition
            ),
          },
          {
            'flex-row inset-y-1/2 left-0 ml-5': [LEFT].includes(screenPosition),
          },
          {
            hidden: [BOTTOM].includes(screenPosition),
          }
        )}
      >
        <div
          className={classnames('flex justify-center', {
            'flex-col': [LEFT, RIGHT].includes(screenPosition),
          })}
        >
          {videos}
        </div>
        <VideoPositionMenu
          show={showCall}
          screenPosition={screenPosition}
          setScreenPosition={setScreenPosition}
          closeFullScreen={closeFullScreen}
        />
      </div>
      <div
        id="videoFooter"
        className="flex justify-center flex-row items-center absolute inset-x-0 bottom-0 max-h-36 group pb-10 h-10"
        style={{ zIndex: 20 }}
      >
        <div
          className={classnames(
            'flex flex-col items-center justify-center bg-transparent absolute',
            {
              'bottom-20 -translate-y-24 transition-all ease-in':
                screenPosition === BOTTOM,
            },
            {
              hidden: [TOP, RIGHT, LEFT].includes(screenPosition),
            }
          )}
          style={{ bottom: '-8px' }}
        >
          <div className="flex flex-col items-center">
            <VideoPositionMenu
              show={showCall}
              screenPosition={screenPosition}
              setScreenPosition={setScreenPosition}
              closeFullScreen={closeFullScreen}
            />
            <div id="videos" className="flex justify-center ">
              {videos}
            </div>
          </div>
        </div>
        <div id="videoFooterMenu" className="flex space-x-2 absolute">
          <div className="flex bg-base-100 items-center rounded-full border border-base-200 py-2 px-3 h-15 bottom-2 transition-all ease-in">
            {showCall ? (
              <div className=" flex space-x-0.5 pr-0.5">
                <div className="mx-4">
                  <h1 className="font-bold">
                    {currentRoomName ? currentRoomName : currentWorkspace?.name}
                  </h1>
                  <h3 className="text-sm">{[].length + 1} Members</h3>
                </div>
                <MuteButton />
                <VideoButton />
                <ScreenShareButton />
                {/* <FullscreenOverlayButtonForFooter id="video-overlay-modal" /> */}
                {/* <FullScreenVideoButton /> */}
                <label
                  htmlFor="video-settings-modal"
                  className="flex items-center text-3xl border-none text-base-content bg-base-200 btn btn-square rounded-full hover:bg-base-300 h-12 w-12 aspect-1"
                >
                  <HiOutlineCog size={20} />
                </label>
              </div>
            ) : (
              <div className="ml-2 mr-4">
                <h2 className="font-bold text-sm">
                  {currentRoomName ? currentRoomName : currentWorkspace?.name}
                </h2>
                <h3 className="text-sm font-medium -mr-2">
                  {new Date().toDateString()}
                </h3>
              </div>
            )}
            <ToggleVideoAudioButton
              currentWorkspace={currentWorkspace}
              userName={profile?.username}
            />
          </div>
          <div className="flex bg-base-100 items-center rounded-full border border-base-200 p-2 aspect-1">
            <button
              className="dropdown btn-sm btn-circle bg-base-200 hover:bg-base-300 rounded-full items-center justify-center flex
              text-3xl border-none btn btn-square h-12 w-12 aspect-1 text-neutral"
            >
              {/* <HiOutlinePlus />
               */}
              <HiOutlineCake size={20} />
            </button>
          </div>
        </div>
        <input
          type="checkbox"
          id="video-settings-modal"
          className="modal-toggle"
        />
      </div>
    </div>
  )
}
