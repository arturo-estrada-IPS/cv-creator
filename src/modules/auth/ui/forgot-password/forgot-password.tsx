import { ChangeEvent, SyntheticEvent, useState } from "react";
import validator from "validator";
import { Alert } from "../../../../shared/widgets/alerts";
import { Button } from "../../../../shared/widgets/buttons";
import { InputText } from "../../../../shared/widgets/forms";
import { forgotPasswordReq } from "../../services";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setPending(true);
    forgotPasswordReq(email)
      .then(() => {
        setPending(false);
        setError("");
      })
      .catch((err) => {
        setPending(false);
        setError(err.message);
      });
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white pt-6 pb-4 mb-2" onSubmit={handleSubmit}>
        {error && (
          <Alert
            color="danger"
            onDismiss={() => {
              setError("");
            }}
          >
            {error || ""}
          </Alert>
        )}
        <InputText
          label="email"
          placeholder="user@domain.com"
          name="email"
          value={email}
          onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
            setEmail(target.value);
          }}
        />
        <Button type="submit" disabled={!validator.isEmail(email)}>
          {pending ? "Sending..." : "Send Email"}
        </Button>
      </form>
    </div>
  );
}

export default ForgotPassword;
