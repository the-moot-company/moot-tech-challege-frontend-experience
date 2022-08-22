import { useState } from 'react'
import ProgressBar from '~/components/onboarding/ProgressBar'
import OnboardingHeader from '~/components/onboarding/OnboardingHeader'
// import useImageUpload from '~/hooks/useImageUpload'

//onboarding for both new company admins and users
import Intro from '~/components/onboarding/Intro'
import ProfileSetup from '~/components/onboarding/ProfileSetup'
import ThemeSetup from '~/components/onboarding/ThemeSetup'
import CommandIntro from '~/components/onboarding/CommandIntro'
import ConnectCalendar from '~/components/onboarding/ConnectCalendar'
import InviteMembers from '~/components/onboarding/InviteMembers'
import Subscribe from '~/components/onboarding/Subscribe'

//onboarding just for new company admins
import WorkspaceSetup from '../components/onboarding/WorkspaceSetup'
import Outro from '../components/onboarding/Outro'

const OnboardingComponentTest = () => {

  const [step, setStep] = useState(1)

  const renderOnboarding = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex justify-center items-center h-screen bg-base-100">
            <OnboardingHeader />
            <Intro continue={() => nextStep()} />
            <div className="w-full absolute bottom-0">
              <ProgressBar stepActive={step} totalSteps={8} />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="flex justify-center items-center h-screen bg-base-100">
            <OnboardingHeader />
            <ProfileSetup
              submitProfile={() => null}
              //   submitProfile={() => submitProfile()}
              fileUploadAvatar={null}
              //   fileUploadAvatar={fileUploadAvatar}
              handleUserNameChange={() => null}
              //   handleUserNameChange={() => handleUserNameChange(event)}
              userName={null}
              //   userName={userName}
              continue={() => nextStep()}
            />
            <div className="w-full absolute bottom-0">
              <ProgressBar stepActive={step} totalSteps={8} />
            </div>
          </div>
        )
      case 3:
        return (
          <div className="flex justify-center items-center h-screen bg-base-100">
            <OnboardingHeader />
            <WorkspaceSetup continue={() => nextStep()} />
            <div className="w-full absolute bottom-0">
              <ProgressBar stepActive={step} totalSteps={8} />
            </div>
          </div>
        )
      case 4:
        return (
          <div className="flex justify-center items-center h-screen bg-base-100">
            <OnboardingHeader />
            <ThemeSetup continue={() => nextStep()} />
            <div className="w-full absolute bottom-0">
              <ProgressBar stepActive={step} totalSteps={8} />
            </div>
          </div>
        )
      case 5:
        return (
          <div className="flex justify-center items-center h-screen bg-base-100">
            <OnboardingHeader />
            <CommandIntro continue={() => nextStep()} />
            <div className="w-full absolute bottom-0">
              <ProgressBar stepActive={step} totalSteps={8} />
            </div>
          </div>
        )
      case 6:
        return (
          <div className="flex justify-center items-center h-screen bg-base-100">
            <OnboardingHeader />
            <ConnectCalendar continue={() => nextStep()} />
            <div className="w-full absolute bottom-0">
              <ProgressBar stepActive={step} totalSteps={8} />
            </div>
          </div>
        )
      case 7:
        return (
          <div className="flex justify-center items-center h-screen bg-base-100">
            <OnboardingHeader />
            <Subscribe continue={() => nextStep()} />
            <div className="w-full absolute bottom-0">
              <ProgressBar stepActive={step} totalSteps={8} />
            </div>
          </div>
        )
      case 8:
        return (
          <div className="flex justify-center items-center h-screen bg-base-100">
            <OnboardingHeader />
            <InviteMembers continue={() => nextStep()} />
            <div className="w-full absolute bottom-0">
              <ProgressBar stepActive={step} totalSteps={8} />
            </div>
          </div>
        )
      case 9:
        return (
          <div className="flex justify-center items-center h-screen bg-base-100">
            <OnboardingHeader />
            <Outro continue={() => nextStep()} />
            <div className="w-full absolute bottom-0">
              <ProgressBar stepActive={step} totalSteps={8} />
            </div>
          </div>
        )
    }
  }
  return renderOnboarding()
}

export default OnboardingComponentTest
