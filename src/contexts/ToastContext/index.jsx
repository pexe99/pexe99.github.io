import React, { createContext, useState, useRef, useEffect } from "react"

const TOAST_ACTIVE_TIME = 5000
const ToastContext = createContext()

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null)
  const timer = useRef(null)

  const addToast = message => {
    setToast({ message, id: Date.now() })
  }

  useEffect(() => {
    if (toast !== null) {
      clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        setToast(null)
      }, TOAST_ACTIVE_TIME)
    }
  }, [toast])

  return (
    <ToastContext.Provider value={{ addToast, toast }}>
      {children}
    </ToastContext.Provider>
  )
}

export { ToastProvider, ToastContext }
