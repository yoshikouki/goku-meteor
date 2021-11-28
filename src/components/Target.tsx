import { styled } from '@mui/system'

interface MeteorProps {
  position: {
    top: number
    left: number
  }
  width?: number
}

const Target = (props: MeteorProps) => {
  const pointerSize = props.width || 10

  return (
    <WrapperMeteor
      sx={{
        top: props.position.top - pointerSize / 2,
        left: props.position.left - pointerSize / 2,
        width: pointerSize,
        height: pointerSize,
        borderRadius: pointerSize,
      }}
    />
  )
}

const WrapperMeteor = styled('div')({
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 100,
  backgroundColor: '#fff',
})

export default Target
