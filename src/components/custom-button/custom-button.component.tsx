import React, { type ButtonHTMLAttributes, type FunctionComponent } from 'react'

import { CustomButtonContainer, IconContainer } from './custom-button.style'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon != null && <IconContainer>{startIcon}</IconContainer>}

      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton
