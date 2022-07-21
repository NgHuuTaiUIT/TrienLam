import Tabs from "./components/Tabs";
import { IframeProvider } from "./context/ContentIframe";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { cloneDeep } from "lodash";
import axios from "axios";

function Layout() {
  
  return (
        <IframeProvider>
          <div className="App container-fluid bg-primary-bg h-[100vh]">
            <Tabs />
          </div>
        </IframeProvider>
  );
}

function App() {
  return  <Router basename={process.env.PUBLIC_URL}>
    <Route exact path={``} component={Layout} />   
  </Router>

} 

export default App;
