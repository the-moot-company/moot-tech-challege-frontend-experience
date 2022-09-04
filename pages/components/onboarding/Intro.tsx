import React from "react";
import Image from "next/image";
import ButtonPrimary from "../common/ButtonPrimary";

type IntroProps = {
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
      <h1 className="text-6xl font-bold leading-relaxed">
        Welcome to Moot
      </h1>
      <p className="text-xl opacity-40 text-center mb-5">
        Moot is a work hub that makes remote work multiplayer, so you and your team can collaborate better, faster and
        cheaper.
      </p>
      <ButtonPrimary onClick={nextStep} text={"Continue"}/>
    </>
  )
}

