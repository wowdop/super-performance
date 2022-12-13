import styled from "styled-components";
import type * as T from "./new.type";
import { animated } from "@react-spring/web";
import { Coords } from "../../common/type";

const svgMap = {
  buildings: `url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M46.5 12h-1.5v-4.5c0-0.828-0.672-1.5-1.5-1.5h-4.5v-4.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5v4.5h-4.5c-0.828 0-1.5 0.672-1.5 1.5v4.5h-1.5c-0.828 0-1.5 0.672-1.5 1.5v7.5h9c1.657 0 3 1.343 3 3v21h-3v-19.5c0-0.828-0.672-1.5-1.5-1.5h-18c-0.828 0-1.5 0.672-1.5 1.5v19.5h-3v-21c0-1.657 1.343-3 3-3h6v-13.5c0-0.828-0.672-1.5-1.5-1.5h-18c-0.828 0-1.5 0.672-1.5 1.5v39c0 0.828 0.672 1.5 1.5 1.5h45c0.828 0 1.5-0.672 1.5-1.5v-33c0-0.828-0.672-1.5-1.5-1.5zM33 18h-3v-3h3v3zM15 9h3v3h-3v-3zM15 15h3v3h-3v-3zM9 9h3v3h-3v-3zM6 36h-3v-3h3v3zM6 30h-3v-3h3v3zM6 24h-3v-3h3v3zM6 18h-3v-3h3v3zM6 12h-3v-3h3v3zM9 15h3v3h-3v-3zM33 45h-15v-18h15v18zM39 18h-3v-3h3v3zM45 36h-3v-6h3v6zM45 27h-3v-6h3v6zM45 18h-3v-3h3v3z'%3E%3C/path%3E%3Cpath d='M21 30h3v3h-3v-3z'%3E%3C/path%3E%3Cpath d='M27 30h3v3h-3v-3z'%3E%3C/path%3E%3Cpath d='M21 36h3v3h-3v-3z'%3E%3C/path%3E%3Cpath d='M27 36h3v3h-3v-3z'%3E%3C/path%3E%3C/svg%3E%0A")`,
  trophy: `url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ctitle%3Emedal%3C/title%3E%3Cpath d='M39 15c0-2.374-1.838-4.317-4.169-4.486 1.528-1.768 1.454-4.442-0.225-6.12s-4.352-1.753-6.12-0.225c-0.17-2.33-2.113-4.168-4.487-4.168s-4.317 1.838-4.486 4.168c-1.768-1.528-4.442-1.454-6.12 0.225s-1.753 4.352-0.225 6.12c-2.33 0.17-4.168 2.113-4.168 4.486s1.838 4.317 4.168 4.486c-1.528 1.768-1.454 4.442 0.225 6.12 1.246 1.246 3.041 1.607 4.607 1.085v19.808l6-6 6 6v-19.808c1.565 0.522 3.36 0.161 4.607-1.085 1.678-1.678 1.753-4.352 0.225-6.12 2.33-0.17 4.169-2.113 4.169-4.487zM24 24c-4.971 0-9-4.029-9-9s4.029-9 9-9c4.971 0 9 4.029 9 9s-4.029 9-9 9z'%3E%3C/path%3E%3C/svg%3E%0A")`,
};

export const NewAnimated = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  touch-action: "none";
`;

export const NewContent = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const New = styled.div<T.New>`
  position: fixed;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  /* height: 1000vh; */
  inset: 0;
  cursor: ${({ mouse }) => (mouse ? "pointer" : "cursor")};
  background-image: ${({ list }) =>
    list.map(({ type = "buildings" }: Coords, k) => svgMap[type]).join(", ")};
  background-repeat: ${({ list }) => list.map(() => "no-repeat").join(", ")};
  background-size: ${({ list }) => list.map(() => "48px").join(", ")};
  background-position-x: ${({ list }) =>
    list.map(({ x }) => `${x}px`).join(", ")};
  background-position-y: ${({ list }) =>
    list.map(({ y }) => `${y}px`).join(", ")};
`;
