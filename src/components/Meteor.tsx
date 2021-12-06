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
  const meteorSize = props.width || 4
  const duration = props.duration || 1000
  const targetX = props.position.left - meteorSize / 2
  const targetY = props.position.top - meteorSize / 2
  const { launchX, launchY } = getRandomLaunchPoint()

  const [inProp, setInProp] = useState(false)

  const Wrapper = styled('div')({
    position: 'absolute',
    zIndex: 50,
    width: meteorSize,
    height: meteorSize,
    borderRadius: meteorSize,
    backgroundColor: '#fff',
    transition: `all ${duration / 1000}s ease-in`,
  })

  const transitionStyles: StyleType = {
    entering: {
      transform: `translate(${launchX}px, ${launchY}px)`,
      backgroundColor: 'red',
    },
    entered: {
      transform: `translate(${targetX}px, ${targetY}px)`,
      backgroundColor: 'yellow',
    },
  }

  useEffect(() => {
    setInProp(true)
    const timer = setTimeout(() => setInProp(false), duration)
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
  if (typeof window === 'undefined') {
    return { launchX: 0, launchY: 0 }
  } else {
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
    const randomIndex = Math.floor(Math.random() * peers.length)
    return peers[randomIndex]
  }
}

export default Meteor
