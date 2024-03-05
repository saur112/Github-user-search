import React from "react";
import Logo from "./components/Logo"
import User from "./Routes/User"
import UserInfo from './Routes/UserInfo'
import {
  useRoutes
} from 'react-router-dom';


const App = () => {

  let element = useRoutes([
    {path: '/', element: <User />},
    {path: '/:name', element: <UserInfo />},
  ]);
  return (<>
  <Logo/>
  {element}
  </>
  )
   

};

export default App;
