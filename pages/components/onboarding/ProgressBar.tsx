import React from 'react'

const stepsAdmins = [
  { name: 'Step 1', status: 'complete' },
  { name: 'Step 2', status: 'current' },
  { name: 'Step 3', status: 'upcoming' },
  { name: 'Step 4', status: 'upcoming' },
  { name: 'Step 5', status: 'upcoming' },
  { name: 'Step 6', status: 'upcoming' },
  { name: 'Step 7', status: 'upcoming' },
  { name: 'Step 8', status: 'upcoming' },
  { name: 'Step 9', status: 'upcoming' },
]

export default function ProgressBar(props) {
  // const [activeStep] = useState(props.activeStep)
  // const [totalSteps] = useState(props.totalSteps)

  return (
    <nav
      className="flex items-center justify-center py-8"
      aria-label="Progress"
    >
      <ol role="list" className="ml-8 flex items-center space-x-5">
        {stepsAdmins.map((step) => (
          <li key={step.name}>
            {step.status === 'complete' ? (
              <a className="block w-2.5 h-2.5 bg-base-300 rounded-full">
                <span className="sr-only">{step.name}</span>
              </a>
            ) : step.status === 'current' ? (
              <a
                className="relative flex items-center justify-center"
                aria-current="step"
              >
                <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
                  <span className="w-full h-full rounded-full" />
                </span>
                <span
                  className=" block w-4 h-4 bg-primary rounded-full absolute opacity-50"
                  aria-hidden="true"
                />
                <span
                  className="relative block w-2.5 h-2.5 bg-primary rounded-full"
                  aria-hidden="true"
                />
                <span className="sr-only">{step.name}</span>
              </a>
            ) : (
              <a className="block w-2.5 h-2.5 bg-base-200 rounded-full hover:bg-base-300">
                <span className="sr-only">{step.name}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
