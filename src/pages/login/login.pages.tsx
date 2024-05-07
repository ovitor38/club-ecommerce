import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

import CustomButton from '../../components/custom-button/custom-button.component'

import Header from '../../components/header/header.component'
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'
import CustomInput from '../../components/custom-input/custom-input.component'
import { useForm } from 'react-hook-form'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'
import validator from 'validator'
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../../config/firebase.config'

interface ILoginForm {
  email: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<ILoginForm>()

  const handleSubmitPress = async (data: ILoginForm) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      console.log({ userCredentials })
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        return setError('email', { type: 'notFound' })
      }
    }
  }

  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButton startIcon={<BsGoogle size={18} />}>
            Entrar com o Goolge
          </CustomButton>
          <LoginSubtitle>Ou entre com seu e-mail</LoginSubtitle>

          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              $hasError={!!errors?.email}
              placeholder='Digite seu e-mail'
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O E-mail é obrigatório</InputErrorMessage>
            )}

            {errors?.email?.type === 'notFound' && (
              <InputErrorMessage>
                E-mail e/ou senha inválido(s)
              </InputErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>Forneça um e-mail valido</InputErrorMessage>
            )}
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              $hasError={!!errors?.password}
              placeholder='Digite sua senha'
              type='password'
              {...register('password', { required: true })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatório</InputErrorMessage>
            )}
          </LoginInputContainer>
          <CustomButton
            onClick={() => handleSubmit(handleSubmitPress)()}
            startIcon={<FiLogIn size={18} />}
          >
            Entrar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
