import React from "react";
import { connect } from "react-redux";
import { createTask } from '../actions/taskActions'
import { loggedIn, logOut, registerUser, forgotPassword } from '../actions/loginActions'
import { info } from '../actions/infoActions'

const CommonContainer = (WrappedComponent, customMapStateToProps = () => ({})) => {
  const ConnectedComponent = (props) => {
    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = (state, ownProps) => ({
    loggedIn: state.loggedIn,
    info: state.info.data,
    ...customMapStateToProps(state), // 🔥 Allow dynamic Redux state injection!
    ...ownProps, // Ensure extra props passed from Router are kept
  });

 const mapDispatchToProps = (dispatch, ownProps) => {
   return {
     isLogged: () => dispatch(loggedIn()),
     signOut: () => dispatch(logOut()),
     getInfo: () => dispatch(info()),
     registerUser: (data) => dispatch(registerUser(data)),
     forgotPassword: (data) => dispatch(forgotPassword(data)),
     createTask: (task, history) => dispatch(createTask(task, history)),
      ...ownProps, // Ensure extra props passed from Router are kept
   }
 }
 

  return connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
};

export default CommonContainer;
