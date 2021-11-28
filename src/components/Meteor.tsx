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
        top: props.position.top - meteorSize / 2,
        left: props.position.left - meteorSize / 2,
        width: meteorSize,
        height: meteorSize,
        borderRadius: meteorSize,
      }}
    />
  )
}

const Wrapper = styled('div')({
  transition: 'all 0.3s linear',
  position: 'absolute',
  zIndex: 50,
  backgroundColor: '#fff',
})

export default Meteor
