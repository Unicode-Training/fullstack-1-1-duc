import { memo } from "react";
function ClearButton({ onClick }) {
  console.log(`ClearButton re-render`);
  return <button onClick={onClick}>Clear</button>;
}
export default memo(ClearButton);
