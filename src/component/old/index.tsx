import { useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { useState } from 'react'
import { Icon } from '..'
import type { Coords } from '../../common/type'
import * as S from './old.style'

const Old = ({ list }: { list: Coords[] }) => {
  const [xy, setXY] = useState<Coords>({
    x: 0,
    y: 0,
    type: 'buildings',
  })
  const [{ x, y }, api] = useSpring(() => xy)

  const bind = useDrag(({ down, movement: [mx, my], offset: [ox, oy] }) => {
    api.set({
      x: ox,
      y: oy,
    })

    if (!down) {
      // setXY(({ x, y }) => ({
      //   x: ~~ox,
      //   y: ~~oy,
      // }))
    }
  })

  return (
    <S.Old>
      <S.NewAnimated {...bind()} style={{ x, y }}>
        {list.map(({ x, y }) => (
          <Icon top={y} left={x} />
        ))}
      </S.NewAnimated>
    </S.Old>
  )
}

export default Old
