import { Icon } from '..'
import type { Coords } from '../../common/type'

const Old = ({ list }: { list: Coords[] }) => {
  return (
    <>
      {list.map(({ x, y }) => (
        <Icon top={y} left={x} />
      ))}
    </>
  )
}

export default Old
