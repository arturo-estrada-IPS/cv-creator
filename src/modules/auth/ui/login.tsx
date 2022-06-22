import { Navigate, Outlet } from "react-router-dom";
import { Card } from "../../../shared/widgets/card";
import { TabItem, Tabs } from "../../../shared/widgets/tabs";
import { userIsAuthenticated } from "../services";

export function Login() {
  const items: TabItem[] = [
    { text: "Sign In", href: "signin" },
    { text: "Sign Up", href: "signup" },
  ];

  return !userIsAuthenticated() ? (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <Tabs items={items} />
        <Outlet />
      </Card>
    </div>
  ) : (
    <Navigate to="/dashboard" />
  );
}
