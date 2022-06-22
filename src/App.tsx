import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login, Signin, Signup } from "./modules/auth";

import { DashboardComponent } from "./modules/dashboard";
import { ProtectedRoute } from "./shared/core";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Login />}>
          <Route index element={<Navigate to="signin" />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardComponent />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
