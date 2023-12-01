import "./App.css";
import Slideshow from "./Slideshow";
import filmData from "./film-data.json";

function App() {
  console.log(filmData);
  return <Slideshow data={filmData} />;
}

export default App;
