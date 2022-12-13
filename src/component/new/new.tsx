import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Coords } from '../../common/type'
import * as S from './new.style'
import type * as T from './new.type'

// boxSize = 1 // normal speed, average 800ms for 1000 icons, 3.8 seconds for 5000
// boxSize = 2 // normal speed x 4
// boxSize = 3 // normal speed x 10
// boxSize = 4 // normal speed x 20
const boxSize = 2 // min 1, max 4
const iconSize = 48

const getPoint = (x: number, boxSize: number) =>
  ~~x % boxSize ? ~~x - (~~x % boxSize) : ~~x

const New = ({ list }: T.New) => {
  const xList = list.map(({ x, y }) => x)
  const yList = list.map(({ x, y }) => y)
  const xMin = Math.min(...xList)
  const xMax = Math.max(...xList)
  const yMin = Math.min(...yList)
  const yMax = Math.max(...yList)

  const mapWidth = xMax - xMin
  const mapHeight = yMax - yMin

  const length = iconSize / boxSize
  const filteredList = useRef<Coords[]>([])
  const [mouse, setMouse] = useState(false)
  const [xy, setXY] = useState<Coords>({
    x: 0,
    y: 0,
    type: 'buildings',
  })

  const bo = useRef({})
  const [{ x, y }, api] = useSpring(() => xy)

  const bind = useDrag(({ down, movement: [mx, my], offset: [ox, oy] }) => {
    api.set({
      x: ox,
      y: oy,
    })

    if (!down) {
      setXY(({ x, y }) => ({
        x: ~~ox,
        y: ~~oy,
      }))
    }
  })

  const mm = (e: any) => {
    const { clientX, clientY } = e
    const isOverList = filteredList.current.filter(
      ({ x, y }: Coords) =>
        clientX >= x + xy.x &&
        clientX <= x + iconSize + xy.x &&
        clientY >= y + xy.y &&
        clientY <= y + iconSize + xy.y

      // 156 si 153 -17
    )
    if (isOverList.length) {
      console.log('isOverList')
      console.log(isOverList, clientX, clientY)
    }

    setMouse(!!isOverList.length)
  }

  useEffect(() => {
    const bigO: { [k: string]: { [k: string]: Coords } } = {}
    const ih = window.innerHeight,
      iw = window.innerWidth

    filteredList.current = list
      // improves general speed of generating the map by 100%
      .filter(
        ({ x, y }) =>
          x + xy.x - boxSize >= 0 &&
          x + xy.x <= iw &&
          y + xy.y >= 0 &&
          y + xy.y <= ih
      )

    document.addEventListener('mousemove', mm)

    return () => {
      document.removeEventListener('mousemove', mm)
    }
  }, [xy])

  const handleClick = useCallback(
    (e) => {
      const { clientX, clientY } = e

      console.log('clientX, clientY, filteredList', xy)
      console.log(
        clientX,
        clientY,
        filteredList.current.filter(
          ({ x, y }) =>
            clientX >= x + xy.x &&
            clientX <= x + iconSize + xy.x &&
            clientY >= y + xy.y &&
            clientY <= y + iconSize + xy.y
        )
      )
    },
    [xy]
  )

  // console.log('xy')
  // console.log(xy, xMin, xMax, yMin)
  return (
    <S.NewContent>
      <S.NewAnimated {...bind()} style={{ x, y }}>
        <S.New
          width={mapWidth}
          height={mapHeight}
          onClick={handleClick}
          mouse={mouse}
          list={list}
        />
      </S.NewAnimated>
    </S.NewContent>
  )
}

export default New
