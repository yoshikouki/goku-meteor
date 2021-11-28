import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { SetStateAction, useState } from 'react'

const GokuMeteor = () => {
  const [pointerTop, setPointerTop] = useState(0)
  const [pointerLeft, setPointerLeft] = useState(0)

  const pointerMoveHandler = (e: { pageY: SetStateAction<number>; pageX: SetStateAction<number> }) => {
    setPointerTop(e.pageY)
    setPointerLeft(e.pageX)
  }

  return (
    <MeteorBackground
      onPointerMove={pointerMoveHandler}
    >
      <MeteorTarget
        sx={{ top: pointerTop, left: pointerLeft }}
      />
      <Meteor
        sx={{
          top: pointerTop,
          left: pointerLeft,
          transition: 'all 0.3s linear',
        }}
      />
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

const Meteor = styled('div')({
  position: 'absolute',
  zIndex: 50,
  width: 4,
  height: 4,
  borderRadius: 4,
  backgroundColor: '#fff',
})

export default GokuMeteor
