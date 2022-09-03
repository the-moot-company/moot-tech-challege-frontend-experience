import ButtonPrimary from "../common/ButtonPrimary";

type SubscribeProps = {
  nextStep: () => void;
}

export default function Subscribe({nextStep}: SubscribeProps) {
  return <ButtonPrimary onClick={nextStep} text="Continue"/>
}
