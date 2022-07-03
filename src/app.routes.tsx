import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login, Signin, Signup } from "./modules/auth";
import ForgotPassword from "./modules/auth/ui/forgot-password/forgot-password";
import Dashboard from "./modules/dashboard/ui/dashboard.component";
import { ProtectedRoute } from "./shared/core";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Login />}>
          <Route index element={<Navigate to="signin" />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="password" element={<ForgotPassword />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}
