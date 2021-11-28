import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { SetStateAction, useState } from 'react'
import Meteor from './components/Meteor'

const GokuMeteor = () => {
  const [pointerTop, setPointerTop] = useState(0)
  const [pointerLeft, setPointerLeft] = useState(0)
  const [meteors, setMeteors] = useState<JSX.Element[]>([])
  const [meteorCount, setMeteorCount] = useState(0)

  const pointerMoveHandler = (e: { pageY: SetStateAction<number>; pageX: SetStateAction<number> }) => {
    setPointerTop(e.pageY)
    setPointerLeft(e.pageX)
    setMeteorCount(meteorCount + 1)
    setMeteors([
      ...meteors,

      <Meteor
        key={meteors.length + 1}
        position={{ top: pointerTop, left: pointerLeft }}
      />,
    ])
  }

  return (
    <MeteorBackground
      onPointerMove={pointerMoveHandler}
    >
      <MeteorTarget
        sx={{
          top: pointerTop - targetPointerSize / 2,
          left: pointerLeft - targetPointerSize / 2,
        }}
      />
      <Meteor position={{ top: pointerTop, left: pointerLeft }}/>
      <Box>
        <span style={{ color: 'white' }}>{meteorCount}</span>
        <Box>{meteors}</Box>
      </Box>
    </MeteorBackground>
  )
}

const MeteorBackground = styled(Box)({
  width: '100vw',
  height: '100vh',
  backgroundColor: 'darkblue',
  cursor: 'none',
})

const targetPointerSize = 10
const MeteorTarget = styled('div')({
  pointerEvents: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 100,
  width: targetPointerSize,
  height: targetPointerSize,
  borderRadius: targetPointerSize,
  backgroundColor: '#fff',
})

export default GokuMeteor
