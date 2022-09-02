import ButtonLarge from "../common/ButtonLarge";

type SubscribeProps = {
  nextStep: () => void;
}

export default function Subscribe({nextStep}: SubscribeProps) {
  return <ButtonLarge onClick={nextStep} text="Continue"/>
}
