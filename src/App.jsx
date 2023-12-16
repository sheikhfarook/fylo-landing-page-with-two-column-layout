import "./App.css";
import FyloBar from "./components/header/fylobar";
import FilesSecure from "./components/main/files-secure";
import Productive from "./components/main/productive";

function App() {
  return (
    <div>
      <FyloBar />
      <FilesSecure />
      <Productive />
    </div>
  );
}

export default App;
