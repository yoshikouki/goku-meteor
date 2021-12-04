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
  const [inProp, setInProp] = useState(false)
  const setInPropToFalse = () => setInProp(false)
  const userPosition = () => ({ top: pointerTop, left: pointerLeft })

  const addMeteorHandler = () => {
    setMeteorCount(pointerMoveCount + 1)
    setMeteors([
      ...meteors,
      <Meteor
        key={meteorCount}
        position={userPosition()}
        inProp={inProp}
        setInPropToFalse={setInPropToFalse}
      />,
    ].slice(-10))
  }

  const pointerMoveHandler = (e: { pageY: SetStateAction<number>; pageX: SetStateAction<number> }) => {
    setPointerTop(e.pageY)
    setPointerLeft(e.pageX)
    setPointerMoveCount(pointerMoveCount + 1)
    if (pointerMoveCount % 10 === 0) addMeteorHandler()
  }

  return (
    <MeteorBackground
      onPointerMove={pointerMoveHandler}
      onClick={() => setInProp(!inProp)}
    >
      <MeteorCounter>{meteorCount}</MeteorCounter>
      <Target position={userPosition()}/>
      <Meteor
        key={meteorCount}
        position={userPosition()}
        inProp={inProp}
        setInPropToFalse={setInPropToFalse}
      />
      <Box>{meteors}</Box>
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
