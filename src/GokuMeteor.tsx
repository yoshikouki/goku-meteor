import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { SetStateAction, useState } from 'react'
import Meteor from './components/Meteor'
import Target from './components/Target'

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
        key={meteorCount}
        position={{ top: pointerTop, left: pointerLeft }}
      />,
    ].slice(-10))
  }

  return (
    <MeteorBackground
      onPointerMove={pointerMoveHandler}
    >
      <Target position={{ top: pointerTop, left: pointerLeft }}/>
      <Box>{meteors}</Box>
      <Box><span style={{ color: 'white' }}>{meteorCount}</span></Box>
    </MeteorBackground>
  )
}

const MeteorBackground = styled(Box)({
  width: '100vw',
  height: '100vh',
  backgroundColor: 'darkblue',
  cursor: 'none',
})

export default GokuMeteor
