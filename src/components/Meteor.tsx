import { styled } from '@mui/system'
import { Transition } from 'react-transition-group'
import { useEffect, useState } from 'react'

interface MeteorProps {
  position: {
    top: number
    left: number
  }
  width?: number
  duration?: number
}

const Meteor = (props: MeteorProps) => {
  const meteorSize: number = props.width || 4
  const duration: number = props.duration || 300
  const targetX: number = props.position.left - meteorSize / 2
  const targetY: number = props.position.top - meteorSize / 2
  const [inProp, setInProp] = useState(false)

  const Wrapper = styled('div')({
    position: 'absolute',
    zIndex: 50,
    width: meteorSize,
    height: meteorSize,
    borderRadius: meteorSize,
    backgroundColor: '#fff',
  })

  const launchPoint = getRandomLaunchPoint()
  const transitionStyles: StyleType = {
    entering: { transform: `translate(${launchPoint.launchX}px, ${launchPoint.launchY}px)` },
    entered: {
      transition: `all ${duration / 1000}s`,
      transform: `translate(${targetX}px, ${targetY}px)`,
    },
  }

  useEffect(() => {
    setInProp(true)
    const timer = setTimeout(() => {setInProp(false)}, duration)
    return clearTimeout(timer)
  }, [])

  return (
    <Transition
      in={inProp}
      timeout={0}
      unmountOnExit
    >
      {(state) => (
        <Wrapper
          style={{
            ...transitionStyles[state],
          }}
        />
      )}
    </Transition>
  )
}

interface StyleType {
  [key: string]: any
}

const getRandomLaunchPoint = () => {
  if (typeof window !== 'undefined') {
    const maxX = window.innerWidth
    const maxY = window.innerHeight
    const X = Math.floor(maxX * Math.random())
    const Y = Math.floor(maxY * Math.random())
    const peers = [
      { launchX: 0, launchY: Y },
      { launchX: X, launchY: 0 },
      { launchX: maxX, launchY: Y },
      { launchX: X, launchY: maxY },
    ]
    return peers[Math.floor(Math.random() * peers.length)]
  } else {
    return { launchX: 0, launchY: 0 }
  }
}

export default Meteor
