import { ALink, Button } from "../../widgets/buttons";
import { InputText } from "../../widgets/forms";

export function Signin() {
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white pt-6 pb-4 mb-2">
        <InputText label="Username" name="username" />
        <InputText label="Password" type="password" name="password" />
        <div className="flex items-center justify-between mt-8">
          <Button type="primary" text="Sign In" />
          <ALink text="Forgot Password?" />
        </div>
      </form>
    </div>
  );
}
