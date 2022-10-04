import React, { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Layout from './components/Layout'
import { VideoFooter } from './components/VideoFooter'
import Dashboard from './components/Dashboard'

const Home = (props: {
  profile?: any
  rooms?: any
  currentWorkspace?: any
  loggedIn: boolean
}) => {
  const { rooms, currentWorkspace, loggedIn } = props
  console.log(props)
  return (
    // need overflow-hidden not  overflow-clip for dumb safari issues
    <div id="homeDiv" className="overflow-hidden relative">
      <Layout
        useBackdrop={false}
        usePadding={false}
        profile={props.profile}
        rooms={rooms}
        currentWorkspace={currentWorkspace}
      >
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <div className="bg-base-200 h-full">
          <Dashboard />
        </div>
        <div className=" flex flex-col justify-center items-center relative">
          {!loggedIn && (
            <div className="h-screen flex flex-col justify-center items-center relative bg-base-200 animate-pulse">
              <Image
                width={80}
                height={80}
                src="/images/logo.png"
                alt="Moot Logo"
              />
            </div>
          )}
        </div>
        <VideoFooter
          currentWorkspace={currentWorkspace}
          profile={props.profile}
        />
      </Layout>
    </div>
  )
}

export default Home

// Fetch user data server-side to eliminate a flash of unauthenticated content.
// We're identifying the logged-in user through supabase cookies and either redirecting to  `/` if the user is not found, or sending the `user` and `loggedIn` props which can be available to the above component through `props`.
export const getServerSideProps = async () => {
  return {
    props: {
      loggedIn: true,
      profile: {
        username: 'Fred Flintstone',
        id: 1,
        is_admin: true,
        avatar_url:
          'https://www.giantbomb.com/a/uploads/square_medium/46/462814/3181437-2099247642-36e9f.jpg',
        organization: {
          name: 'Bedrock',
          admin: '1',
          id: 1,
        },
      },
      currentWorkspace: {
        name: 'Main',
        organization: '1',
        id: 1,
        isDefault: true,
        emoji: {
          emoji: '🤩',
          names: [
            'grinning face with star eyes',
            'star-struck',
            'grinning_face_with_star_eyes',
          ],
          unified: '1f929',
          originalUnified: '1f929',
        },
      },
      rooms: [
        {
          name: 'Main',
          organization: '1',
          id: 1,
          isDefault: true,
          emoji: {
            emoji: '🤩',
            names: [
              'grinning face with star eyes',
              'star-struck',
              'grinning_face_with_star_eyes',
            ],
            unified: '1f929',
            originalUnified: '1f929',
          },
        },
      ],
    },
  }
}
