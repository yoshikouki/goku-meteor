import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { SetStateAction, useState } from 'react'
import Meteor from './Meteor'
import Target from './Target'

const GokuMeteor = () => {
  const [pointerTop, setPointerTop] = useState(0)
  const [pointerLeft, setPointerLeft] = useState(0)
  const [meteors, setMeteors] = useState<JSX.Element[]>([])
  const [meteorCount, setMeteorCount] = useState(0)
  const [inProp, setInProp] = useState(false)
  const setInPropToFalse = () => setInProp(false)

  const pointerMoveHandler = (e: { pageY: SetStateAction<number>; pageX: SetStateAction<number> }) => {
    setPointerTop(e.pageY)
    setPointerLeft(e.pageX)
    setMeteorCount(meteorCount + 1)
    setMeteors([
      ...meteors,
      <Meteor
        key={meteorCount}
        position={{ top: pointerTop, left: pointerLeft }}
        inProp={inProp}
        setInPropToFalse={setInPropToFalse}
      />,
    ].slice(-10))
  }

  return (
    <MeteorBackground
      onPointerMove={pointerMoveHandler}
      onClick={() => setInProp(!inProp)}
    >
      <Target position={{ top: pointerTop, left: pointerLeft }}/>
      <Box>{meteors}</Box>
      <Meteor
        key={meteorCount}
        position={{ top: pointerTop, left: pointerLeft }}
        inProp={inProp}
        setInPropToFalse={setInPropToFalse}
      />
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