import React from "react"
import styled, { keyframes } from "styled-components"

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(3rem);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const ToastWrapper = styled.div`
  position: fixed;
  bottom: 1.5rem;
  line-height: 1.5;
  left: 50%;
  font-size: 0.875rem;
  transform: translateX(-50%);
  background-color: ${props => props.theme.toastBackground};
  color: ${props => props.theme.toastText};
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  z-index: 1000;
  box-shadow: ${props => props.theme.tocBarShadow};
  animation: ${fadeInUp} 0.27s ease, ${fadeOut} 0.27s ease 4s forwards;
  user-select: none;
`

const Toast = ({ message }) => {
  return <ToastWrapper>{message}</ToastWrapper>
}

export default Toast
