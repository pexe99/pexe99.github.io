import React, { useContext } from "react"
import { ToastContext } from "../../contexts/ToastContext"
import Toast from "./Toast"

const ToastContainer = () => {
  const { toast } = useContext(ToastContext)

  return <>{toast && <Toast message={toast.message} />}</>
}

export default ToastContainer
