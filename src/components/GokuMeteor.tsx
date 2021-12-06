import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { SetStateAction, useState } from 'react'
import Meteor from './Meteor'
import Target from './Target'

const GokuMeteor = () => {
  const [pointerTop, setPointerTop] = useState(0)
  const [pointerLeft, setPointerLeft] = useState(0)
  const [pointerMoveCount, setPointerMoveCount] = useState(0)
  const [meteors, setMeteors] = useState<JSX.Element[]>([])
  const [meteorCount, setMeteorCount] = useState(0)
  const userPosition = () => ({ top: pointerTop, left: pointerLeft })

  const addMeteorHandler = () => {
    setMeteorCount(meteorCount + 1)
    setMeteors([
      ...meteors,
      <Meteor
        key={meteorCount}
        position={userPosition()}
      />,
    ].slice(-30))
  }

  const pointerMoveHandler = (e: { pageY: SetStateAction<number>; pageX: SetStateAction<number> }) => {
    setPointerTop(e.pageY)
    setPointerLeft(e.pageX)
    setPointerMoveCount(pointerMoveCount + 1)
    if (pointerMoveCount % 5 === 0) addMeteorHandler()
  }

  return (
    <MeteorBackground
      onPointerMove={pointerMoveHandler}
      onClick={addMeteorHandler}
    >
      <Target position={userPosition()}/>
      <Box>{meteors}</Box>
      <MeteorCounter>{meteorCount}</MeteorCounter>
    </MeteorBackground>
  )
}

const MeteorBackground = styled(Box)({
  width: '100vw',
  height: '100vh',
  backgroundColor: 'darkblue',
  cursor: 'none',
})

const MeteorCounter = styled(Box)({
  color: 'white',
})

export default GokuMeteor
