import { styled } from '@mui/system'
import { Transition } from 'react-transition-group'

interface MeteorProps {
  position: {
    top: number
    left: number
  }
  width?: number
  duration?: number
  inProp: boolean
  setInPropToFalse: ()=>void
}

interface StyleType {
  [key: string]: any
}

const Meteor = (props: MeteorProps) => {
  const meteorSize: number = props.width || 4
  const duration: number = props.duration || 300
  const targetX: number = props.position.left - meteorSize / 2
  const targetY: number = props.position.top - meteorSize / 2

  const Wrapper = styled('div')({
    position: 'absolute',
    zIndex: 50,
    width: meteorSize,
    height: meteorSize,
    borderRadius: meteorSize,
    backgroundColor: '#fff',
    transition: `all ${duration / 1000}s`,
  })

  const transitionStyles: StyleType = {
    entering: { transform: `translate(0px, 0px)` },
    entered: { transform: `translate(${targetX}px, ${targetY}px)` },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

  return (
    <Transition
      in={props.inProp}
      timeout={0}
      unmountOnExit
      onEntered={()=> setTimeout(props.setInPropToFalse, duration)}
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

export default Meteor
