import { useLocation, useParams } from "@reach/router";
import { useEffect, useState } from "react";
import { Icon, New } from "..";
import type { Coords } from "../../common/type";
import Old from "../old";
import * as S from './smart-map-renderer.style'

const howManyDefault = 500;
const limit = 0;
const mapMultiplier = 2;

const performanceStart = window.performance.now()
const SmartMapRenderer = ({ showNew = false }: { showNew?: boolean }) => {
  const { howMany } = useParams() || { howMany: 10 }

  const [list, set] = useState<Coords[]>([]);
  const [count, setCount] = useState<number>(0);
  const [performance, setPerformance] = useState<number>(0);

  useEffect(() => {
    const ih = window.innerHeight,
      iw = window.innerWidth;

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
      type: i % 2 ? "buildings" : "trophy",
    })) as Coords[];

    set(list);
  }, [howMany, count]);

  useEffect(() => {
    if (list.length) {
      setPerformance(window.performance.now() - performanceStart)
    }

  }, [list])

  // const setNumber = (e: any) => {
  //   const { value } = e.target
  //   setHowMany(+value)
  // }

  return (
    <div style={{ position: "relative" }}>
      <S.Info>Performance: {(~~(performance) / 1000)} seconds</S.Info>
      {/* <input type="number" onChange={setNumber} />
      <div>Count: {count}</div>
      <h1>Smart map Renderer</h1>
      <p>Render icons the smart way!</p> */}

      {list &&
        list.length &&
        (showNew ? <New list={list} /> : <Old list={list} />)}
    </div>
  );
};

export default SmartMapRenderer;
