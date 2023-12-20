import "./App.css";
import FyloContect from "./components/footer/Fylo-contect";
import Access from "./components/footer/access";
import FyloBar from "./components/header/fylobar";
import FilesSecure from "./components/main/files-secure";
import Productive from "./components/main/productive";
import { TailwindIndicator } from "./components/tailwind/indicator";

function App() {
  return (
    <div>
      <FyloBar />
      <FilesSecure />
      <Productive />
      <Access />
      <FyloContect />
      <TailwindIndicator />
    </div>
  );
}

export default App;
