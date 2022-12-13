import styled from "styled-components";
import { animated } from "@react-spring/web";
import { Coords } from "../../common/type";

export const Old = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  border: 10px dashed red;
`;

export const NewAnimated = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  touch-action: "none";
`;
