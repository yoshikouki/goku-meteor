import { Box } from '@mui/material'
import { styled } from '@mui/system'

const GokuMeteor = () => {
  return (
    <MeteorBackground>
      <MeteorTarget/>
    </MeteorBackground>
  )
}

const MeteorBackground = styled(Box)({
  width: '100vw',
  height: '100vh',
  backgroundColor: 'darkblue',
  cursor: 'none',
})

const MeteorTarget = styled('div')({
  pointerEvents: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 100,
  width: 10,
  height: 10,
  backgroundColor: '#fff',
  borderRadius: 5,
})

export default GokuMeteor
