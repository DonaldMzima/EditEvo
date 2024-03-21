import 'intro.js/introjs.css'
import React, { useState } from 'react'
import { Steps, Hints } from 'intro.js-react'

const OnboardingSteps = () => {
  const [stepsEnabled, setStepsEnabled] = useState(true)
  const [initialStep] = useState(0)
  const [steps, setSteps] = useState([
    {
      element: '.hello',
      intro:
        'Welcome to the EditEvo Video Editor!  Let`s take a quick tour to get you familiar with the features.',
    },
    {
      element: '.video',
      intro: 'Upload Your First Video!',
    },
    {
      element: '.audio',
      intro: 'Upload Your First audio!',
    },
    {
      element: '.image',
      intro: 'Upload Your First image',
    },
    {
      element: '.texts',
      intro: 'Add Text, including heading,titles and subtitle,etc',
    },
    {
      element: '.animation',
      intro:
        'Enhance your video transitions using our collection of transition effects. Explore different options to give your video a professional touch.',
    },
    {
      element: '.effects',
      intro:
        'Add filters and effects to enhance the visual appeal of your video. Experiment with various filters and effects to achieve the desired look.',
    },
    {
      element: '.fill',
      intro: 'Change your background color into your favorate color',
    },
    {
      element: '.export',
      intro:
        'Once satisfied, save your video in your desired format and resolution.',
    },
    {
      element: '.end',
      intro: `Get Creative!Now that you've learned the basics, it's time to unleash your creativity. Explore advanced features and create stunning videos with our video editor.`,
    },
  ])
  const [hintsEnabled] = useState(true)
  const [hints] = useState([
    {
      element: '.hello',
      hint: 'Hello hint',
      hintPosition: 'middle-right',
    },
    {
      element: '.video',
      hint: 'Hello hint',
      hintPosition: 'right',
    },
  ])

  const onExit = () => {
    setStepsEnabled(false)
  }

  return (
    <>
      <Steps
        enabled={stepsEnabled}
        steps={steps}
        initialStep={initialStep}
        onExit={onExit}
      />
      <Hints enabled={hintsEnabled} hints={hints} />
    </>
  )
}

export default OnboardingSteps
