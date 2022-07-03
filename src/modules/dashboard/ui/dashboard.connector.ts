import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { getUserProfileAPI } from "../../profile";

const mapStateToProps = (state: RootState) => {
  const { profile } = state;
  return profile;
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    getUserProfileAPI: (uid: string) => dispatch(getUserProfileAPI(uid)),
  };
};

export const profileConnector = connect(mapStateToProps, mapDispatchToProps);
