import { animated } from '@react-spring/web'
import styled from 'styled-components'

export const G = styled.g`
  fill: blue;
  transition: 250ms;
  cursor: pointer;

  &:hover {
    fill: green;
  }
`

export const NewAnimated = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  touch-action: 'none';
`
