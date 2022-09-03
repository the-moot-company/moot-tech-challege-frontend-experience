import ButtonPrimary from "../common/ButtonPrimary";

type ConnectCalendarProps = {
  nextStep: () => void;
}

export default function ConnectCalendar({nextStep}: ConnectCalendarProps) {
  return <ButtonPrimary onClick={nextStep} text="Continue"/>
}
