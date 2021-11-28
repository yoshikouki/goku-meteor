import { styled } from '@mui/system'

interface MeteorProps {
  position: {
    top: number
    left: number
  }
  width?: number
}

const Meteor = (props: MeteorProps) => {
  const meteorSize: number = props.width || 4
  const targetX: number = props.position.left - meteorSize / 2
  const targetY: number = props.position.top - meteorSize / 2

  const Wrapper = styled('div')({
    position: 'absolute',
    zIndex: 50,
    width: meteorSize,
    height: meteorSize,
    borderRadius: meteorSize,
    backgroundColor: '#fff',
    animation: 'strike 1s',
    '@keyframes strike': {
      from: {},
      to: {
        transform: `translate(${targetX}px, ${targetY}px)`,
      },
    },
  })

  return (
    <Wrapper/>
  )
}

export default Meteor
