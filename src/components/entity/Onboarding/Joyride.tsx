import Joyride, { Step } from 'react-joyride'

interface State {
  isRunning: boolean
  steps: Step[]
}

export const JoyrideComponent = ({ steps, isRunning }: State) => {
  return (
    <Joyride
      debug
      spotlightClicks
      showProgress
      steps={steps}
      run={isRunning}
      showSkipButton
      continuous
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
