import { useSelector } from "react-redux";
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardTitle,
} from "../../../../shared/widgets";
import { ProfileService, selectUserProfile } from "../../../profile";

export function UnverifiedEmail() {
  const currentUser = useSelector(selectUserProfile);

  const service = new ProfileService();

  const onButtonClick = () => {
    service
      .requestEmailVerification(currentUser.uid)
      .then((result) => {
        // TODO: handle success
        console.log(result);
      })
      .catch((error) => {
        // TODO: handle error
        console.error(error);
      });
  };

  return (
    <Card>
      <CardTitle>Welcome!</CardTitle>
      <Alert>
        <div className="text-center">
          We need to verify your email. Check your email to verify your account
        </div>
      </Alert>
      <CardContent>
        If tou have not recived an email you can click below
      </CardContent>
      <div className="text-center">
        <Button onClick={onButtonClick}>Send email veification link</Button>
      </div>
    </Card>
  );
}
