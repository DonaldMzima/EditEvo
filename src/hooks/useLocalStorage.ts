import { useState, useEffect, Dispatch, SetStateAction } from 'react'

/**
 * Custom React hook to persist state to localStorage
 * @param key - localStorage key
 * @param initialValue - initial state value (can be any value)
 * @returns a stateful value, and a function to update it.
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  // Getting stored value from local storage
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      try {
        const item = window.localStorage.getItem(key)
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue
      } catch (error) {
        console.error('Error parsing localStorage item:', error)
      }
    }
    return initialValue
  })

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error('Error setting localStorage item:', error)
    }
  }

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item !== null) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.error('Error parsing localStorage item:', error)
    }
  }, [key])

  return [storedValue, setValue]
}
