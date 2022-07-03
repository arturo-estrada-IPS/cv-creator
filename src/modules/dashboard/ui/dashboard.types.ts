import { ConnectedProps } from "react-redux";
import { profileConnector } from "./dashboard.connector";

type PropsFromRedux = ConnectedProps<typeof profileConnector>;

export interface DashboardProps extends PropsFromRedux {}
