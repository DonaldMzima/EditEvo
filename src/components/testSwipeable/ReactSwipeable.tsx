import React, { useState } from 'react'
import { FiArrowLeft, FiArrowRight, FiCheck } from 'react-icons/fi' // Import icons
import SwipeableViews from 'react-swipeable-views'

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
}

export const ReactSwipeable = () => {
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
    if (index < 5) {
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
  }

  // Check if the process should be hidden based on localStorage
  if (localStorage.getItem('EditEvo_hideProcess') === 'true') {
    return null // Return null to hide the process
  }

  return (
    <div>
      {showProcess && (
        <div>
          <SwipeableViews
            className="w-48"
            index={index}
            onChangeIndex={handlePagination}
          >
            <div style={styles.slide}>
              <img src="/men1u_mobile.png" alt="Slide 1" style={styles.image} />
            </div>
            <div style={styles.slide}>
              <img
                src="/opations_mobile.png"
                alt="Slide 2"
                style={styles.image}
              />
            </div>
            <div style={styles.slide}>
              <img
                src="/profile_mobile.png"
                alt="Slide 3"
                style={styles.image}
              />
            </div>
            <div style={styles.slide}>
              <img
                src="/canvas_mobile.png"
                alt="Slide 4"
                style={styles.image}
              />
            </div>
            <div style={styles.slide}>
              <img
                src="/elements_mobile.png"
                alt="Slide 5"
                style={styles.image}
              />
            </div>
            <div style={styles.slide}>
              <img
                src="/footer_mobile.png"
                alt="Slide 6"
                style={styles.image}
              />
            </div>
          </SwipeableViews>
          <div style={styles.pagination}>
            {[0, 1, 2, 3, 4, 5].map((step) => (
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
          {index !== 5 && <button onClick={handleSkip}>Skip</button>}

          {index !== 5 && (
            <button onClick={handleNext}>
              <FiArrowRight />
            </button>
          )}
          {index === 5 && (
            <button onClick={handleDone}>
              Done
              {/* <FiCheck /> */}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
