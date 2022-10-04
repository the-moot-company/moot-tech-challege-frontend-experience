import { useRef } from 'react'
import Avatar from './Avatar'

/* eslint-disable @next/next/no-img-element */
const UserCard = (props: { entry: any; index: any; rooms: any }) => {
  const { entry, index, rooms } = props
  const cardRef = useRef<HTMLDivElement>()
  const avatarRef = useRef<HTMLDivElement>()
  return (
    <div
      ref={avatarRef}
      className="dropdown dropdown-right dropdown-hover px-2 py-2 static h-12"
      key={index}
      onMouseOver={(e) => {
        // https://css-tricks.com/popping-hidden-overflow/
        cardRef.current.style.top = avatarRef.current.offsetTop + 'px'
        // debugger
      }}
    >
      <label tabIndex={0}>
        <Avatar
          className="w-8 text-sm"
          profile={entry}
          online={entry.inRoom}
          offline={!entry.inRoom}
        />
      </label>
      {/* TODO: Make contact cards their own component */}
      <div
        ref={cardRef}
        tabIndex={0}
        className="dropdown-content card card-compact w-64 shadow-xl bg-base-100 ml-4 absolute"
      >
        <div className="card-body">
          <div className="justify-start">
            <Avatar
              className="w-16 ring-base-100 ring-2"
              profile={entry}
              online={entry.inRoom}
              offline={!entry.inRoom}
              active={true}
            />
          </div>
          <p className="card-title text-lg">{entry.username}</p>
          <p className="text-xs -mt-2">{entry.users.email}</p>
          <p className="text-xs uppercase opacity-60 font-bold mt-2">
            About Me
          </p>
          <p className="text-xs">{entry.users?.bio}</p>
          <p className="text-xs uppercase opacity-60 font-bold mt-2">Tags</p>
          {entry.users?.tags?.map((tag) => (
            <div className="flex px-2 py-1 w-fit bg-base-200 items-center justify-center mr-2">
              <p>{tag}</p>
            </div>
          ))}
          <p className="text-xs">{entry.users?.tags}</p>{' '}
          <p>{entry.users.email}</p>
          {entry.inRoom ? (
            <p>
              In Room:
              {rooms.filter((room) => room.id === entry.inRoom)[0].name}
            </p>
          ) : (
            ''
          )}
          {/* <p>you can use any element as a dropdown.</p> */}
          {/* <div className="card-actions justify-end">
            <button className="btn bg-primary-blue">Talk Now</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default UserCard
