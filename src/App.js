import Carousel from "./components/Carousel";
import datas from "./assets/data/data.json";
import Tabs from "./components/Tabs";
import { useGetData } from "./hooks/useGetData";

function App() {
  const data = useGetData();
  console.log(data);
  return (
    <div className="App container-fluid">
      <Tabs />
    </div>
  );
}

export default App;
