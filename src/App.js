import './App.css';
import Header from "./components/header/Header";

import {Route} from "./route/Route";
import {useRoutes} from "react-router-dom";

function App() {
   return useRoutes((Route))
  // (
  //   <div>
  //   <Header/>
  //     <HeroPage/>
  //   </div>
  // );
}

export default App;
