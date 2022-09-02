import ButtonLarge from "../common/ButtonLarge";

type CommandIntroProps = {
  nextStep: () => void;
}

export default function CommandIntro({nextStep}: CommandIntroProps) {
  return <ButtonLarge onClick={nextStep} text="Continue"/>
}
