import ButtonPrimary from "../common/ButtonPrimary";

type CommandIntroProps = {
  nextStep: () => void;
}

export default function CommandIntro({nextStep}: CommandIntroProps) {
  return <ButtonPrimary onClick={nextStep} text="Continue"/>
}
