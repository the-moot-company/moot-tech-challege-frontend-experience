/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { HTMLAttributes, useEffect, useState } from 'react'
// import Image from 'next/image'

const Avatar: React.FC<
  {
    profile: any
    className?: string
    active?: boolean
    online?: boolean
    offline?: boolean
  } & HTMLAttributes<HTMLDivElement>
> = ({
  profile,
  active,
  className = 'w-16',
  online = false,
  offline = active ? true : false,
  tabIndex = -1,
  style,
}) => {
  const [placeholder, setPlaceholder] = useState(true)
  const [initials, setInitials] = useState('')
  useEffect(() => {
    if (!placeholder && profile?.avatar_url) {
      setPlaceholder(false)
    } else {
      setPlaceholder(true)
    }

    if (profile?.username)
      setInitials(
        profile?.username
          .match(/(\b\S)?/g)
          .join('')
          .match(/(^\S|\S$)?/g)
          .join('')
          .toUpperCase()
      )
  }, [profile, placeholder])

  useEffect(() => {
    setPlaceholder(false)
  }, [profile?.avatar_url])

  return (
    <div
      tabIndex={tabIndex}
      className={classNames(
        className,
        'avatar rounded-full not-prose',
        { placeholder: placeholder },
        { online: online },
        { offline: offline }
      )}
      style={{ ...style }}
    >
      <div
        className={classNames(className, 'rounded-full', {
          'bg-base-300': placeholder,
        })}
      >
        {placeholder ? (
          initials.length > 0 ? (
            <span className="text-xs">{initials}</span>
          ) : (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              alt="blank"
            />
          )
        ) : (
          // weird stuff happens with next/Image for these avatars
          // <Image
          //   src={profile?.avatar_url}
          //   layout="fill"
          //   onError={() => {
          //     setPlaceholder(true)
          //   }}
          //   objectFit="fill"
          //   className="rounded-full"
          // />
          <img
            alt={initials}
            src={profile?.avatar_url}
            // style={{ margin: 0 }}
            onError={() => {
              setPlaceholder(true)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Avatar
