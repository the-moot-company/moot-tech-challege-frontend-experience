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
      <h1 className="text-4xl font-bold leading-relaxed">
        First things first!
      </h1>
      <p className="text-xl opacity-40">Tell us a bit about yourself.</p>
      <div className="flex my-5">
        <div className="rounded-full bg-base-200 p-5 mr-7">
          <CameraOutlineIcon/>
        </div>
        <form
          onSubmit={submitProfile}
          className="w-full"
        >
          <div>
            <label
              className="text-xs label-text opacity-60"
            >
              What should we call you?
            </label>
            <input
              type="text"
              className="mt-2 block w-96 border border-primary rounded-sm px-3 py-3"
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