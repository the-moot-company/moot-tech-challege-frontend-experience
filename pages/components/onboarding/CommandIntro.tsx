import ButtonLarge from "../common/ButtonLarge";

interface CommandIntroProps {
  nextStep: () => void;
}

export default function CommandIntro({nextStep}: CommandIntroProps) {
  return <ButtonLarge onClick={nextStep} text="Continue"/>
}
