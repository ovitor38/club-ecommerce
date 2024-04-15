import { FunctionComponent, InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './custom-input.style'

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: FunctionComponent<ICustomInput> = ({
  hasError,
  ...rest
}) => {
  return <CustomInputContainer hasError={hasError} {...rest} />
}

export default CustomInput
