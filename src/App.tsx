import { BrowserRouter } from "react-router-dom";
import { Login } from "./modules/auth";

function App() {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
}

export default App;
