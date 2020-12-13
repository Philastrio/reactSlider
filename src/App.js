import "./App.css";
import ImageSlider from "./components/ImageSlider.jsx";
import { SliderData } from "./components/SliderData";

function App() {
  return <ImageSlider slides={SliderData} />;
}

export default App;
