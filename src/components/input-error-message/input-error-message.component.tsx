import { FunctionComponent } from 'react'
import { InputErrorMessageContainer } from './input-error-message.style'
import { ICommonProps } from '../../common/interfaces'

const InputErrorMessage: FunctionComponent<ICommonProps> = ({ children }) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
