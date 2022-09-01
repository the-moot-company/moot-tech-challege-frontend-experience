import React, {useState} from 'react'
import ProgressBar from './components/onboarding/ProgressBar'
import OnboardingHeader from './components/onboarding/OnboardingHeader'
// import useImageUpload from '~/hooks/useImageUpload'

//onboarding for both new company admins and users
import Intro from './components/onboarding/Intro'
import ProfileSetup from './components/onboarding/ProfileSetup'
import ThemeSetup from './components/onboarding/ThemeSetup'
import CommandIntro from './components/onboarding/CommandIntro'
import ConnectCalendar from './components/onboarding/ConnectCalendar'
import Subscribe from './components/onboarding/Subscribe'

//onboarding just for new company admins
import WorkspaceSetup from './components/onboarding/WorkspaceSetup'
import Outro from './components/onboarding/Outro'

const OnboardingComponentTest = () => {

  const [step, setStep] = useState(0)

  const pagesList = [
    <Intro nextStep={() => nextStep()}/>,
    <ProfileSetup nextStep={() => nextStep()}/>,
    <WorkspaceSetup nextStep={() => nextStep()}/>,
    <ThemeSetup nextStep={() => nextStep()}/>,
    <CommandIntro nextStep={() => nextStep()}/>,
    <ConnectCalendar nextStep={() => nextStep()}/>,
    <Subscribe nextStep={() => nextStep()}/>,
    <Outro nextStep={() => nextStep()}/>
  ]

  const totalSteps = pagesList.length

  const nextStep = () => {
    if (step + 1 < totalSteps) {
      setStep(step + 1)
    } else {
      // finish onboarding
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-base-100 flex-col" data-theme="light">
      <OnboardingHeader/>
      <div className="sm:max-w-xl flex flex-col justify-center items-center">
        {pagesList[step]}
      </div>
      <div className="w-full absolute bottom-0">
        <ProgressBar stepActive={step} totalSteps={totalSteps}/>
      </div>
    </div>
  )
}

export default OnboardingComponentTest
