import { ClickTarget } from "../ClickTarget";

export default function Game() {
  function handleClick() {
    console.log("Clicked!");
  }

  return (
    <>
      <ClickTarget onClick={handleClick} />
      <p>Game goes here</p>
    </>
  );
}
