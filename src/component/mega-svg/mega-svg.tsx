import { useParams } from '@reach/router'
import { useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { useEffect, useState } from 'react'
import type { Coords } from '../../common/type'
import type * as T from './mega-svg.type'
import * as S from './mega-svg.style'

const howManyDefault = 500
const limit = 0
const mapMultiplier = 2

const performanceStart = window.performance.now()

const MegaSvg = ({}: T.MegaSvg) => {
  const { howMany } = useParams() || { howMany: 10 }
  const [list, set] = useState<Coords[]>([])
  const [performance, setPerformance] = useState<number>(0)
  const [selected, setSelected] = useState<any>({})

  const ih = window.innerHeight,
    iw = window.innerWidth

  const [xy, setXY] = useState<Coords>({
    x: 0,
    y: 0,
    type: 'buildings',
  })

  useEffect(() => {
    const list = Array.from({ length: howMany }, (_, i) => ({
      i,
      x: ~~(
        Math.random() *
        mapMultiplier *
        iw *
        (Math.random() > 0.5 ? 1 : -1)
      ),
      y: ~~(
        Math.random() *
        mapMultiplier *
        ih *
        (Math.random() > 0.5 ? 1 : -1)
      ),
      type: i % 2 ? 'buildings' : 'trophy',
    })) as Coords[]

    set(list)
  }, [howMany])

  useEffect(() => {
    if (list.length) {
      setPerformance(window.performance.now() - performanceStart)
    }
  }, [list])

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

  const handleDivClick = (e: any) => {
    setSelected(list[+e.currentTarget.id])
  }

  return (
    <div>
      <h1>Mega SVG</h1>
      <h2>Performance: {~~performance / 1000} seconds</h2>

      <div>
        <h3>Selected:</h3>
        <pre>{JSON.stringify(selected, null, 2)}</pre>
      </div>

      <S.NewAnimated {...bind()} style={{ x, y }}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width={5000}
          height={5000}
          viewBox={`0 0 5000 5000`}
        >
          <title>arrows</title>
          {list.map(({ x, y, type }, key) => (
            <S.G
              className="icon"
              onClick={handleDivClick}
              name={`group-${key}`}
              key={key}
              id={key + ''}
              x={x}
              y={y}
              transform={`translate(${x} ${y})`}
            >
              <circle cx={24} cy={24} r={24} fill="transparent" />
              <path d="M35.399 3c-5.045 0-9.387 4.104-11.398 8.391-2.013-4.286-6.355-8.391-11.401-8.391-6.955 0-12.6 5.646-12.6 12.601 0 14.149 14.273 17.859 24.001 31.848 9.195-13.902 23.999-18.15 23.999-31.848 0-6.956-5.645-12.601-12.601-12.601z"></path>
            </S.G>
          ))}
        </svg>
      </S.NewAnimated>
    </div>
  )
}

export { MegaSvg }
