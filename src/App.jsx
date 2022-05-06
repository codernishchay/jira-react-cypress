import "./App.css";
import Navbar from "./navbar/navbar";
import { DataProvider } from "./dataContext";
import BaseComponent from "./BaseComponent/baseComponent";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Navbar />
        <BaseComponent />
      </div>
    </DataProvider>
  );
}

export default App;
