import { Button } from "../../widgets/buttons";
import { InputText } from "../../widgets/forms";

export function Signup() {
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white pt-6 pb-4 mb-2">
        <InputText label="Name" name="name" />
        <InputText label="Email" name="email" />
        <InputText label="Choose Password" type="password" name="password" />
        <div className=" flex justify-center items-center mt-8">
          <Button type="primary" text="Sign Up" />
        </div>
      </form>
    </div>
  );
}
