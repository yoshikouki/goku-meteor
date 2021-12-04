import { styled } from '@mui/system'
import { memo } from 'react'
import { Box } from '@mui/material'

// eslint-disable-next-line react/display-name
const MeteorBackground = () => <Wrapper/>

const Wrapper = styled(Box)({
  width: '100vw',
  height: '100vh',
  backgroundColor: 'darkblue',
  cursor: 'none',
})

export default MeteorBackground
