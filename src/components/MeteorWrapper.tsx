import { styled } from '@mui/system'
import { memo, ReactElement } from 'react'
import { Box } from '@mui/material'

interface Props {
  children: ReactElement[]
}

// eslint-disable-next-line react/display-name
const MeteorWrapper = memo(({ children }: Props) => <Wrapper>{children}</Wrapper>)

const Wrapper = styled(Box)({
  width: '100vw',
  height: '100vh',
})

export default MeteorWrapper
