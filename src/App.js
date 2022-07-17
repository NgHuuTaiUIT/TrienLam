import Tabs from "./components/Tabs";
import { IframeProvider } from "./context/ContentIframe";

function App() {
  return (
        <IframeProvider>
          <div className="App container-fluid bg-primary-bg h-[100vh]">
            <Tabs />
          </div>
        </IframeProvider>
  );
}

export default App;
