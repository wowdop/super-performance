import type { RouteComponentProps } from "@reach/router";
import { useState } from "react";

export const Home = ({ }: RouteComponentProps) => {
  const [showExperiment, change] = useState("super-performance");
  const [howMany, setHowMany] = useState<number>(2500);
  const valueList = [25, 250, 500, 1000, 2500, 5000, 7500, 15000, 25000];

  return (
    <div style={{ background: "lightblue" }}>
      <p>
        Testing heavy loads of{" "}
        <b>{new Intl.NumberFormat("en-gb").format(howMany)}</b> icons
      </p>
      <table>
        <tr>
          {(valueList.map((value) => (<td>
            <button onClick={() => setHowMany(value)}>{value}</button>
          </td>)))}

        </tr>
      </table>

      <table>
        <tr>
          <td>
            <button onClick={() => change("old")}>Old</button>
          </td>
          <td>
            <button onClick={() => change("super-performance")}>New</button>
          </td>
        </tr>
      </table>

      <table
        cellPadding={10}
        cellSpacing={10}
        width="100%"
        style={{ height: "100vh" }}
      >
        <tr>
          <td>
            <iframe
              width="100%"
              height="100%"
              src={`/${showExperiment}/${howMany}`}
              frameBorder="0"
            ></iframe>
          </td>
        </tr>
      </table>
    </div>
  );
};
