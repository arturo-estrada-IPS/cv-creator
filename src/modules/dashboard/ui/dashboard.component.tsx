import { useEffect } from "react";
import { toast } from "react-toastify";
import { Spinner } from "../../../shared/core";
import { useLocalStorage } from "../../../shared/core/hooks/local-storage.hook";
import { profileConnector } from "./dashboard.connector";
import { DashboardProps } from "./dashboard.types";

function DashboardComponent({
  getUserProfileAPI,
  entity,
  loading,
  errors,
}: DashboardProps) {
  const [uid] = useLocalStorage<string>("uid");

  useEffect(() => {
    function fetchData() {
      if (!entity.uid && errors.length === 0) {
        getUserProfileAPI(uid as string)
          .then(() => {
            // TODO: display success
          })
          .catch(() => {
            // Todo: display errors
          });
      }

      if (errors.length > 0)
        toast.error("An error ocurred while fetching data");
    }
    fetchData();
  }, [entity, errors.length, getUserProfileAPI, uid]);

  return (
    <div className="dashboard">
      {loading && <Spinner size={"large"} color={"primary"} />}
      {entity.uid && entity.emailVerified && <p>Name: {entity.displayName} </p>}
    </div>
  );
}

const Dashboard = profileConnector(DashboardComponent);

export default Dashboard;
