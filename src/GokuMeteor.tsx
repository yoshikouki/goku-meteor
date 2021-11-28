import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { SetStateAction, useState } from 'react'

const GokuMeteor = () => {
  const [pointerTop, setPointerTop] = useState(0)
  const [pointerLeft, setPointerLeft] = useState(0)
  const [meteors, setMeteors] = useState<JSX.Element[]>([])
  const [meteorCount, setMeteorCount] = useState(0)

  const pointerMoveHandler = (e: { pageY: SetStateAction<number>; pageX: SetStateAction<number> }) => {
    setPointerTop(e.pageY)
    setPointerLeft(e.pageX)
    setMeteorCount(meteorCount + 1)
    meteors.push(<span>/</span>)
    setMeteors(meteors)
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
      <Meteor
        sx={{
          top: pointerTop - meteorSize / 2,
          left: pointerLeft - meteorSize / 2,
          transition: 'all 0.3s linear',
        }}
      />
      <Box>
        <span style={{ color: 'white' }}>{meteorCount}</span>
        <Box>
          <span style={{ color: 'gray' }}>{meteors}</span>
        </Box>
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

const meteorSize = 4
const Meteor = styled('div')({
  position: 'absolute',
  zIndex: 50,
  width: meteorSize,
  height: meteorSize,
  borderRadius: meteorSize,
  backgroundColor: '#fff',
})

export default GokuMeteor
