import React, {useState} from "react";
import {CameraOutlineIcon} from "../../../public/svgs/CameraOutlineIcon";
import ButtonLarge from "../common/ButtonLarge";

type ProfileSetupProps = {
  nextStep: () => void;
}

export default function ProfileSetup({nextStep}: ProfileSetupProps) {
  const [fileUploadAvatar, setFileUploadAvatar] = useState(null)
  const [userName, setUserName] = useState("")

  const submitProfile = () => {
    //
  }

  const handleClick = () => {
    submitProfile()
    nextStep()
  }

  return (
    <>
      <h1 className="text-4xl font-extrabold text-gray-700 tracking-tight sm:text-5xl">
        First things first!
      </h1>
      <p className="mt-4 text-xl text-gray-500 ">
        Tell us a bit about yourself.
      </p>
      <div className="flex items-center">
        <CameraOutlineIcon/>
        <form
          onSubmit={submitProfile}
          className="mt-6 sm:max-w-lg sm:w-full sm:flex flex-col"
        >
          <div className="min-w-0 flex-1 mb-2">
            <label
              htmlFor="hero-message"
              className="uppercase label-text menu-title font-bold text-gray-500"
            >
              What should we call you?
            </label>
            <input
              id="hero-name"
              type="text"
              className="mt-2 block w-full border border-base-300 rounded-lg px-5 py-3 text-base bg-base-100 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="eg. John Doe, Jenny Doe..."
              onChange={(e) => {
                setUserName(e.target.value)
              }}
              required
            />
          </div>
        </form>
      </div>
      <ButtonLarge onClick={handleClick} text={"Continue"}/>
    </>
  )
}