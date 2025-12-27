import { useEffect } from "react";
import useFitText from "use-fit-text";
import "./Screen.css"

export default function Screen({ value }) {
  const { fontSize, ref, recalc } = useFitText();

  useEffect(() => {
    if (recalc) {
      recalc();
    }
  }, [value, recalc]);

  return (
    <div className="screen" ref={ref}>
      {value}
    </div>
  );
}
