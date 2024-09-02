import React, { createContext, useState, useCallback, useEffect } from "react"

const TOAST_ACTIVE_TIME = 5000
const ToastContext = createContext()

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null)
  const [timer, setTimer] = useState(null)

  const addToast = useCallback(
    message => {
      if (timer) {
        clearTimeout(timer)
        setToast(null)
      }
      setTimeout(() => {
        setToast({ message, id: Date.now() })
      }, 0)
      setTimer(
        setTimeout(() => {
          setToast(null)
        }, TOAST_ACTIVE_TIME)
      )
    },
    [timer]
  )

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [timer])

  return (
    <ToastContext.Provider value={{ addToast, toast }}>
      {children}
    </ToastContext.Provider>
  )
}

export { ToastProvider, ToastContext }
