import { FunctionComponent, useEffect, useState } from 'react'
import {
  HiOutlineArrowsExpand,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineDesktopComputer,
  HiOutlineX,
  HiOutlineDotsVertical,
} from 'react-icons/hi'
// import { usePeer } from '~/lib/peerWithDaily'
import { useRouter } from 'next/router'
import classNames from 'classnames'
// import useDailyHooks from '~/hooks/useDailyHooks'
import classnames from 'classnames'
import {
  RiLayoutBottom2Line,
  RiLayoutLeft2Line,
  RiLayoutRight2Line,
  RiLayoutTop2Line,
} from 'react-icons/ri'
import { MdOutlineFitScreen } from 'react-icons/md'

const classes =
  'flex items-center text-3xl border-none text-primary-blue bg-primary-grey btn btn-square rounded-full h-12 w-12 aspect-1'

export const MuteButton: FunctionComponent = () => {
  // const { toggleMyAudio, myAudioIsMuted, audioStatus } = useDailyHooks()
  const [loadingAudio, setLoadingAudio] = useState(false)

  return (
    <div className={classnames(classes, { 'btn-disabled': loadingAudio })}>
      <div
        className={classnames(
          'flex items-center text-3xl border-none btn btn-square rounded-full h-12 w-12 aspect-1',
          { loading: loadingAudio },
          {
            'bg-light-secondary-red hover:bg-primary-red hover:text-primary-white text-primary-red':
              true,
          },
          {
            'bg-light-secondary-green hover:bg-primary-green hover:text-primary-white text-primary-green':
              false,
          }
        )}
      >
        {!loadingAudio && <HiOutlineMicrophone size={20} />}
      </div>
    </div>
  )
}

export const VideoButton: FunctionComponent = () => {
  const [loadingVideo, setLoadingVideo] = useState(false)

  return (
    <div className={classnames(classes, { 'btn-disabled': loadingVideo })}>
      <div
        className={classnames(
          'flex items-center text-3xl border-none btn btn-square rounded-full h-12 w-12 aspect-1 text-black',
          { loading: loadingVideo },
          {
            'bg-light-secondary-red hover:bg-primary-red hover:text-primary-white text-primary-red':
              false,
          },
          {
            'bg-light-secondary-green hover:bg-primary-green hover:text-primary-white text-primary-green':
              true,
          }
        )}
      >
        {!loadingVideo && <HiOutlineVideoCamera size={20} />}
      </div>
    </div>
  )
}

export const ScreenShareButton: FunctionComponent = () => {
  // const { isSharingScreen, stopScreenShare, startScreenShare } = useDailyHooks()

  return (
    <div className={classes}>
      <div className="flex items-center text-3xl border-none bg-light-secondary-red btn btn-square rounded-full h-12 w-12 aspect-1 hover:bg-primary-red hover:text-primary-white text-primary-red">
        <HiOutlineDesktopComputer size={20} />
      </div>
    </div>
  )
}

export const ToggleVideoAudioButton: FunctionComponent<{
  currentWorkspace: any
  userName: any
}> = ({ currentWorkspace, userName }) => {
  // const { showCall, toggleVideoAndAudio, showLoader } = usePeer()
  const showCall = false
  const showLoader = false
  return (
    <button className={classNames(classes, { 'btn-disabled': showLoader })}>
      {showCall ? (
        <div className="flex items-center text-3xl border-none bg-light-secondary-red btn btn-square hover:bg-primary-red hover:text-primary-white text-primary-red rounded-full h-12 w-12 aspect-1">
          <HiOutlineX size={20} />
        </div>
      ) : (
        <div
          className={classNames(
            'btn-sm btn-circle bg-base-200 hover:bg-base-300 rounded-full items-center justify-center flex text-3xl border-none btn btn-square h-12 w-12 aspect-1 text-neutral',
            { loading: showLoader }
          )}
        >
          {!showLoader && <HiOutlineVideoCamera size={20} />}
        </div>
      )}
    </button>
  )
}

export const FullScreenVideoButton: FunctionComponent = () => {
  const router = useRouter()
  let nextPage =
    '/dashboard/' + router.query.OrgSlug + '/' + router.query.WorkspaceSlug
  if (router.pathname === '/room') {
    // should be current workspace
  } else {
    nextPage = nextPage + '/room'
  }
  return (
    <div
      onClick={() => {
        router.push(nextPage)
      }}
      className={''}
    >
      {nextPage.includes('/room') ? (
        <label className="flex items-center text-3xl border-none text-base-content bg-base-200 btn btn-square rounded-full hover:bg-base-300 h-12 w-12 aspect-1">
          <HiOutlineArrowsExpand size={20} />
        </label>
      ) : (
        <label className="flex items-center text-3xl border-none text-base-content bg-base-200 btn btn-square rounded-full hover:bg-base-300 h-12 w-12 aspect-1">
          <HiOutlineArrowsExpand size={20} />
        </label>
      )}
    </div>
  )
}

export const FullscreenOverlayButtonForPositionMenu: FunctionComponent<{
  id: string
}> = ({ id }) => {
  const [clicked, setClicked] = useState(false)
  return (
    <button className="btn btn-sm btn-outline bg-base-100 p-0">
      <label
        htmlFor={id}
        className="p-2"
        onClick={() => {
          setClicked((prevClicked) => !prevClicked)
        }}
      >
        {clicked ? <MdOutlineFitScreen /> : <MdOutlineFitScreen />}
      </label>
    </button>
  )
}

type ScreenPosition = 'top' | 'bottom' | 'left' | 'right' | 'absolute'

export const VideoPositionMenu: FunctionComponent<{
  screenPosition: ScreenPosition
  setScreenPosition: any
  show: boolean
  noHover?: boolean
  closeFullScreen: Function
}> = ({
  screenPosition,
  setScreenPosition,
  show = false,
  noHover = false,
  closeFullScreen,
}) => {
  const TOP = 'top'
  const BOTTOM = 'bottom'
  const LEFT = 'left'
  const RIGHT = 'right'
  const ABSOLUTE = 'absolute'

  if (show)
    return (
      <div
        className={classNames(
          { 'hidden group-hover:flex': !noHover },
          { flex: noHover },
          {
            'flex-col px-2': [LEFT, RIGHT].includes(screenPosition),
          },
          { 'pb-4': [BOTTOM].includes(screenPosition) },
          { 'pt-2': [TOP].includes(screenPosition) }
        )}
      >
        <div
          className={classnames(
            'btn-group',
            {
              'btn-group-vertical w-8 p-0 mb-2': [LEFT, RIGHT].includes(
                screenPosition
              ),
            },
            { 'w-max mr-2': [TOP, BOTTOM, ABSOLUTE].includes(screenPosition) }
          )}
        >
          <button
            className={classNames('btn btn-sm p-2 btn-outline bg-base-100', {
              'btn-active': [TOP].includes(screenPosition),
            })}
            onClick={() => {
              closeFullScreen()
              setScreenPosition(TOP)
            }}
          >
            <RiLayoutTop2Line />
          </button>
          <button
            className={classNames('btn btn-sm p-2 btn-outline bg-base-100', {
              'btn-active': [BOTTOM].includes(screenPosition),
            })}
            onClick={() => {
              closeFullScreen()
              setScreenPosition(BOTTOM)
            }}
          >
            <RiLayoutBottom2Line />
          </button>
          <button
            className={classNames('btn btn-sm p-2 btn-outline bg-base-100', {
              'btn-active': [LEFT].includes(screenPosition),
            })}
            onClick={() => {
              closeFullScreen()
              setScreenPosition(LEFT)
            }}
          >
            <RiLayoutLeft2Line />
          </button>
          <button
            className={classNames('btn btn-sm p-2 btn-outline bg-base-100', {
              'btn-active': [RIGHT].includes(screenPosition),
            })}
            onClick={() => {
              closeFullScreen()
              setScreenPosition(RIGHT)
            }}
          >
            <RiLayoutRight2Line />
          </button>
          <FullscreenOverlayButtonForPositionMenu id="video-overlay-modal" />
        </div>
        <div className="w-8 p-0 btn btn-sm btn-outline bg-base-100">
          <HiOutlineDotsVertical />
        </div>
      </div>
    )
  return <></>
}
