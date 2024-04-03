import React, { useState } from 'react'
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride'

interface Props {
  breakpoint: string
}

interface State {
  isRunning: boolean
  steps: Step[]
}

export const JoyrideComponent = ({ steps, isRunning }: State) => {
  return (
    <Joyride
      steps={steps}
      run={isRunning}
      continuous
      showProgress
      showSkipButton
      locale={{ next: 'Next', last: 'Finish', skip: 'Skip' }}
      styles={{
        options: {
          primaryColor: '#333',
          zIndex: 1, // Ensure it's above other elements
        },
      }}
    />
  )
}
