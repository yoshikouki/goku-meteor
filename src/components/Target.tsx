import { styled } from '@mui/system'

interface MeteorProps {
  position: {
    top: number
    left: number
  }
  width?: number
}

const Target = (props: MeteorProps) => {
  const meteorSize: number = props.width || 10
  const targetX: number = props.position.left - meteorSize / 2
  const targetY: number = props.position.top - meteorSize / 2

  const Wrapper = styled('div')({
    position: 'absolute',
    top: targetY,
    left: targetX,
    zIndex: 100,
    width: meteorSize,
    height: meteorSize,
    borderRadius: meteorSize,
    backgroundColor: '#fff',
  })

  return (
    <Wrapper/>
  )
}

export default Target
