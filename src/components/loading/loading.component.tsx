import { FunctionComponent } from 'react'
import { LoadingContainer } from './loading.style'
import { SyncLoader } from 'react-spinners'

interface ILoadingProps {
  message?: string
}

const Loading: FunctionComponent<ILoadingProps> = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}

export default Loading
