import styled from 'styled-components'

import type * as T from './icon.type'

const svgMap = {
  buildings: `url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M46.5 12h-1.5v-4.5c0-0.828-0.672-1.5-1.5-1.5h-4.5v-4.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5v4.5h-4.5c-0.828 0-1.5 0.672-1.5 1.5v4.5h-1.5c-0.828 0-1.5 0.672-1.5 1.5v7.5h9c1.657 0 3 1.343 3 3v21h-3v-19.5c0-0.828-0.672-1.5-1.5-1.5h-18c-0.828 0-1.5 0.672-1.5 1.5v19.5h-3v-21c0-1.657 1.343-3 3-3h6v-13.5c0-0.828-0.672-1.5-1.5-1.5h-18c-0.828 0-1.5 0.672-1.5 1.5v39c0 0.828 0.672 1.5 1.5 1.5h45c0.828 0 1.5-0.672 1.5-1.5v-33c0-0.828-0.672-1.5-1.5-1.5zM33 18h-3v-3h3v3zM15 9h3v3h-3v-3zM15 15h3v3h-3v-3zM9 9h3v3h-3v-3zM6 36h-3v-3h3v3zM6 30h-3v-3h3v3zM6 24h-3v-3h3v3zM6 18h-3v-3h3v3zM6 12h-3v-3h3v3zM9 15h3v3h-3v-3zM33 45h-15v-18h15v18zM39 18h-3v-3h3v3zM45 36h-3v-6h3v6zM45 27h-3v-6h3v6zM45 18h-3v-3h3v3z'%3E%3C/path%3E%3Cpath d='M21 30h3v3h-3v-3z'%3E%3C/path%3E%3Cpath d='M27 30h3v3h-3v-3z'%3E%3C/path%3E%3Cpath d='M21 36h3v3h-3v-3z'%3E%3C/path%3E%3Cpath d='M27 36h3v3h-3v-3z'%3E%3C/path%3E%3C/svg%3E%0A")`,
}

export const Icon = styled.div<T.Icon>`
  position: fixed;
  background-image: ${svgMap.buildings};
  width: 3rem;
  height: 3rem;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
`
