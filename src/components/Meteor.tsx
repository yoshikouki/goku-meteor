import { styled } from '@mui/system'
import { useEffect, useState } from 'react'

interface MeteorProps {
  position: {
    top: number
    left: number
  }
  width?: number
}

const Meteor = (props: MeteorProps) => {
  const [ready, setReady] = useState(true)
  const meteorSize: number = props.width || 4
  const targetX: number = props.position.left - meteorSize / 2
  const targetY: number = props.position.top - meteorSize / 2

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const Wrapper = styled('div')({
    position: 'absolute',
    zIndex: 50,
    width: meteorSize,
    height: meteorSize,
    borderRadius: meteorSize,
    backgroundColor: '#fff',
    transition: 'all 1s 0.1s',
    '&.ready': {
      transform: `translate(100px, 100px)`,
    }
  })

  return (
    <Wrapper
      className={ready ? 'ready' : ''}
      style={{
        transform: `translate(${targetX}px, ${targetY}px)`,
      }}
    />
  )
}

export default Meteor
