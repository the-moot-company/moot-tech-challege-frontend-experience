import ButtonPrimary from "../common/ButtonPrimary";

type WorkspaceSetupProps = {
 nextStep: () => void;
}

export default function WorkspaceSetup({nextStep}: WorkspaceSetupProps) {
 return <ButtonPrimary onClick={nextStep} text="Continue"/>
}