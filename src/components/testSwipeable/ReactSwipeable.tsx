import React, { useState } from 'react'
import { FiArrowLeft, FiArrowRight, FiCheck } from 'react-icons/fi' // Import icons
import SwipeableViews from 'react-swipeable-views'
import MobileEditor from '../MobileView/MobileEditor'

const styles = {
  slide: {
    padding: 5,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    display: 'flex',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: '#ccc',
    margin: '0 5px',
    cursor: 'pointer',
  },
  activeDot: {
    background: '#000',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  fullScreen: {
    height: '100vh',
  },
}

export const ReactSwipeable = ({ onSwipeComplete }: any) => {
  const [index, setIndex] = useState(0)
  const [showProcess, setShowProcess] = useState(true)

  const handlePagination = (index: number) => {
    setIndex(index)
  }

  const handleStep = (index: number) => {
    setIndex(index)
  }

  const handleSkip = () => {
    setShowProcess(false)
    localStorage.setItem('EditEvo_hideProcess', 'true')
  }

  const handleNext = () => {
    if (index < 6) {
      setIndex(index + 1)
    }
  }

  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  const handleDone = () => {
    setShowProcess(false)
    localStorage.setItem('EditEvo_hideProcess', 'true')
    if (onSwipeComplete) {
      onSwipeComplete()
    }
  }

  if (localStorage.getItem('EditEvo_hideProcess') === 'true') {
    return <MobileEditor />
  }

  const slides = [
    { title: 'Introduction', image: '/introduction.jpg' },
    { title: 'Slide 1', image: '/menu_mobile.png' },
    { title: 'Slide 2', image: '/opations_mobile.png' },
    // { title: 'Slide 3', image: '/profile_mobile.png' },
    { title: 'Slide 4', image: '/canvas.png' },
    { title: 'Slide 5', image: '/elements_mobile.png' },
    { title: 'Slide 6', image: '/footer_mobile.png' },
  ]

  return (
    <div>
      {showProcess ? (
        <div className="w-full h-full">
          <SwipeableViews
            enableMouseEvents
            className="w-full h-full"
            index={index}
            onChangeIndex={handlePagination}
          >
            {slides.map((slide, idx) => (
              <div key={idx} style={styles.slide}>
                <img src={slide.image} alt={slide.title} style={styles.image} />
                <p>{slide.title}</p>
              </div>
            ))}
          </SwipeableViews>
          <div style={styles.pagination}>
            {[0, 1, 2, 3, 4, 5, 6].map((step) => (
              <div
                key={step}
                style={{
                  ...styles.dot,
                  ...(step === index ? styles.activeDot : null),
                }}
                onClick={() => handleStep(step)}
              />
            ))}
          </div>
          {index !== 0 && (
            <button onClick={handleBack}>
              <FiArrowLeft />
            </button>
          )}
          {index !== 6 && <button onClick={handleSkip}>Skip</button>}

          {index !== 6 && (
            <button onClick={handleNext}>
              <FiArrowRight />
            </button>
          )}
          {index === 6 && (
            <button onClick={handleDone}>
              Done
              {/* <FiCheck /> */}
            </button>
          )}
        </div>
      ) : (
        <MobileEditor />
      )}
    </div>
  )
}
