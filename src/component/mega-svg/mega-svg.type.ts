import type { RouteComponentProps } from '@reach/router'
import type { Coords } from '../../common/type'

export interface MegaSvg extends RouteComponentProps {
  list: Coords[]
}
