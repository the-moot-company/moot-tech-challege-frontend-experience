import React from 'react'

type ProgressBarProps = {
  stepActive: number;
  totalSteps: number;
}

export default function ProgressBar({stepActive, totalSteps}: ProgressBarProps) {
  const stepComplete = (key: number) => (
    <li key={key}>
      <a className="block w-2.5 h-2.5 bg-base-300 rounded-full">
        <span className="sr-only">Complete</span>
      </a>
    </li>
  )

  const stepCurrent = (key: number) => (
    <li key={key}>
      <a
        className="relative flex items-center justify-center"
        aria-current="step"
      >
      <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
        <span className="w-full h-full rounded-full"/>
      </span>
        <span
          className=" block w-4 h-4 bg-primary rounded-full absolute opacity-50"
          aria-hidden="true"
        />
        <span
          className="relative block w-2.5 h-2.5 bg-primary rounded-full"
          aria-hidden="true"
        />
        <span className="sr-only">Current</span>
      </a>
    </li>
  )

  const stepUpcoming = (key: number) => (
    <li key={key}>
      <a className="block w-2.5 h-2.5 bg-base-200 rounded-full hover:bg-base-300">
        <span className="sr-only">Upcoming</span>
      </a>
    </li>
  )

  let steps = []
  for (let i = 0; i < totalSteps; i++) {
    if (i < stepActive) {
      steps.push(stepComplete(i))
    } else if (i === stepActive) {
      steps.push(stepCurrent(i))
    } else {
      steps.push(stepUpcoming(i))
    }
  }

  return (
    <nav
      className="flex items-center justify-center py-8"
      aria-label="Progress"
    >
      <ol role="list" className="ml-8 flex items-center space-x-5">
        {steps}
      </ol>
    </nav>
  )
}
