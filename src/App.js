import { HashRouter } from "react-router-dom";
import LogadoContext from "./components/app_contexts/LogadoContext";

function App() {
  return (
    <HashRouter>
      < LogadoContext />
    </HashRouter>
  );
}

export default App;