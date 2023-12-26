import "./App.css";
import { Game } from "./Game";

function App() {
  return (
    <>
      <div className="bg-stone-700 h-100-dvh overflow-hidden">
        <h1>Coop Idler</h1>
        <div>
          <Game />
        </div>
      </div>
    </>
  );
}

export default App;
