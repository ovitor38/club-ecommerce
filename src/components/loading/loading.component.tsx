import { FunctionComponent } from 'react'
import { LoadingContainer } from './loading.style'
import { SyncLoader } from 'react-spinners'

const Loading: FunctionComponent = () => {
  return (
    <LoadingContainer>
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}

export default Loading
