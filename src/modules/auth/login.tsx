import { Navigate, Route, Routes } from "react-router-dom";
import { Card } from "../../shared/widgets/card";
import { TabItem, Tabs } from "../../shared/widgets/tabs";
import { Signin } from "./signin";
import { Signup } from "./signup";

export function Login() {
  const items: TabItem[] = [
    { text: "Sign In", href: "signin" },
    { text: "Sign Up", href: "signup" },
  ];

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <Tabs items={items} />
        <Routes>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Navigate to="/signin" replace />} />
        </Routes>
      </Card>
    </div>
  );
}
