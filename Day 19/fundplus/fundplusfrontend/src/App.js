import "./Assets/Styles/App.css";
import Routers from "./Routers/Routers";
import { UseStates } from "./States/UseStates";

function App() {
  return (
    <>
      <div>
        <UseStates>
          <Routers />
        </UseStates>
      </div>
    </>
  );
}

export default App;
