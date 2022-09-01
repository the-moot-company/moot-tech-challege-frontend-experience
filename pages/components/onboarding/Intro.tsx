import React from "react";
import Image from "next/image";
import ButtonLarge from "../common/ButtonLarge";

interface IntroProps {
  nextStep: () => void;
}

export default function Intro({nextStep}: IntroProps) {
  return (
    <>
      <Image
        src="/images/logo.png"
        alt="Moot Logo"
        width={131}
        height={131}
        className=""
      />
      <h1 className="text-4xl font-extrabold text-gray-700 tracking-tight sm:text-5xl">
        Welcome to Moot
      </h1>
      <p className="mt-4 text-xl text-gray-500 ">
        Moot is a work hub that makes remote work multiplayer, so you and your team can collaborate better, faster and
        cheaper.
      </p>
      <ButtonLarge onClick={nextStep} text={"Continue"}/>
    </>
  )
}

