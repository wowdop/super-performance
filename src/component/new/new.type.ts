import type { MouseEventHandler } from "react";
import type { Coords } from "../../common/type";

export interface New {
  list: Coords[];
  mouse?: boolean;
  width?: number;
  height?: number;
  onClick?: MouseEventHandler<HTMLDivElement> & ((e: MouseEvent) => void);
}
