import { styled } from '@mui/system'

interface MeteorProps {
  position: {
    top: number
    left: number
  }
  width?: number
}

const styleGenerator = (props: MeteorProps) => {
  const meteorSize: number = props.width || 4
  const targetX: number = props.position.left - meteorSize / 2
  const targetY: number = props.position.top - meteorSize / 2

  return {
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
  }
}

const Meteor = (props: MeteorProps) => {
  return (
    <Wrapper
      sx={styleGenerator(props)}
    />
  )
}

const Wrapper = styled('div')({})


export default Meteor
