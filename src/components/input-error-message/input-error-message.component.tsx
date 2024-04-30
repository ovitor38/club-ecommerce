import { FunctionComponent, ReactNode } from 'react'
import { InputErrorMessageContainer } from './input-error-message.style'

interface InputErrorMessageProps {
  children: ReactNode
}

const InputErrorMessage: FunctionComponent<InputErrorMessageProps> = ({
  children
}) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
