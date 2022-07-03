import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./app.routes";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
      <ToastContainer />
    </Provider>
  );
}

export default App;
