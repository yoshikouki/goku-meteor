import { styled } from '@mui/system'

interface MeteorProps {
  position: {
    top: number
    left: number
  }
  width?: number
}

const Meteor = (props: MeteorProps) => {
  const meteorSize = props.width || 4

  return (
    <Wrapper
      sx={{
        width: meteorSize,
        height: meteorSize,
        borderRadius: meteorSize,
        animation: 'strike 1s',
        '@keyframes strike': {
          from: {},
          to: {
            transform: `translate(${props.position.left - meteorSize / 2}px, ${props.position.top - meteorSize / 2}px)`,
          },
        },
      }}
    />
  )
}

const Wrapper = styled('div')({
  position: 'absolute',
  zIndex: 50,
  backgroundColor: '#fff',
})

export default Meteor
