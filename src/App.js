// import logo from './logo.svg';
import "./App.css";
import Table from "./components/Table";
import Data from "./components/File.json";
function App() {
  // const jsonObj = [
  //   {
  //     id: "0001",
  //     type: "donut",
  //     name: "Cake",
  //     ppu: 0.55,
  //   },
  //   {
  //     id: "0002",
  //     type: "donut",
  //     name: "Raised",
  //     ppu: 0.55,
  //   },
  //   {
  //     id: "0003",
  //     type: "donut",
  //     name: "Old Fashioned",
  //     ppu: 0.55,
  //   },
  //   {
  //     id: "0004",
  //     type: "wallnut",
  //     name: "New Fashioned",
  //     ppu: 0.66,
  //   },
  // ];

  return <Table jsonObj={Data} />;
}

export default App;
