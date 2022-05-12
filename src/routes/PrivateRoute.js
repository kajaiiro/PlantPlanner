// Importing the required libraries
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
const axios = require('axios');
 
 
// Private Route Component
// Params: login -> indicates the login state
//         children -> the child components of private route
const PrivateRoute = ({ login, children }) => {
 
  // Authentication Handler
  const authenticate = (login) => {
 
    setLoading(true);
 
    // HTTP Post Request
    axios({
      method: 'post',
      url: 'http://localhost:8080/admin',
      data: {
        logged: login,
      }
    }).then(({ data }) => {
      if(data.success){
        setAuth(true);
      }else{
        setAuth(false);
      }
      console.log(data.message);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    })
  }
 
  // useState hook to inform the user about the loading state
  const [loading, setLoading] = useState(true);
 
  // useState hook to authorize the user
  const [auth, setAuth] = useState(false);
 
  // Authenticates the user whenever the
  // login state changes
  useEffect(() => {
    authenticate(login);
    return () => {
      setLoading(true);
    };
  }, [login])
 
  // If authenticated loads the required component
  // else redirects to the home page
  return loading ? (
    <h1>Loading...</h1>
  ) : auth ? children : (
    <Navigate to="/" />
  );
};
 
export default PrivateRoute;