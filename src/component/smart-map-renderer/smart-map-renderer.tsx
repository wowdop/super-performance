import { useEffect, useState } from 'react'
import { Icon, New } from '..'
import type { Coords } from '../../common/type'
import Old from '../old'

const howManyDefault = 20000
const limit = 0
const mapMultiplier = 2

const SmartMapRenderer = () => {
  const [howMany, setHowMany] = useState<number>(howManyDefault)
  const [list, set] = useState<Coords[]>([])
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const ih = window.innerHeight,
      iw = window.innerWidth

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
    }))

    set(list)
  }, [howMany, count])

  // const setNumber = (e: any) => {
  //   const { value } = e.target
  //   setHowMany(+value)
  // }

  return (
    <div style={{ position: 'relative' }}>
      {/* <input type="number" onChange={setNumber} />
      <div>Count: {count}</div>
      <h1>Smart map Renderer</h1>
      <p>Render icons the smart way!</p> */}

      {list && list.length && <New list={list} />}
    </div>
  )
}

export default SmartMapRenderer
